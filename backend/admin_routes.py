from fastapi import APIRouter, HTTPException, Depends, status
from typing import List, Optional
from motor.motor_asyncio import AsyncIOMotorClient
from models import *
import os
from datetime import datetime
import hashlib

admin_router = APIRouter(prefix="/admin", tags=["admin"])

# Simple authentication (for demo purposes)
ADMIN_USERNAME = "admin"
ADMIN_PASSWORD = "festival2025"  # In production, use environment variables

def verify_admin_credentials(username: str, password: str) -> bool:
    return username == ADMIN_USERNAME and password == ADMIN_PASSWORD

def get_password_hash(password: str) -> str:
    return hashlib.sha256(password.encode()).hexdigest()

# We'll set the db reference later to avoid circular imports
db = None

def set_db(database):
    global db
    db = database

# Admin Authentication
@admin_router.post("/login", response_model=AdminToken)
async def admin_login(credentials: AdminLogin):
    if not verify_admin_credentials(credentials.username, credentials.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials"
        )
    
    # Simple token (in production, use JWT)
    token = get_password_hash(f"{credentials.username}:{credentials.password}")
    return AdminToken(access_token=token)

# Dashboard Statistics
@admin_router.get("/statistics", response_model=Statistics)
async def get_statistics():
    total_artists = await db.artists.count_documents({})
    total_films = await db.films.count_documents({})
    total_votes = await db.votes.count_documents({})
    total_contacts = await db.contacts.count_documents({})
    total_newsletter_subscribers = await db.newsletter.count_documents({})
    
    return Statistics(
        total_artists=total_artists,
        total_films=total_films,
        total_votes=total_votes,
        total_contacts=total_contacts,
        total_newsletter_subscribers=total_newsletter_subscribers
    )

# Festival Management
@admin_router.get("/festival", response_model=Festival)
async def get_festival():
    festival = await db.festival.find_one({})
    if not festival:
        # Create default festival
        default_festival = Festival(
            name={
                "ar": "المهرجان الثقافي الوطني للفنون التشكيلية والفنون البصرية للأغواط",
                "fr": "Festival Culturel National des Arts Plastiques et des Arts Visuels de LAGHOUAT",
                "en": "National Cultural Festival of Plastic Arts and Visual Arts of LAGHOUAT"
            },
            description={
                "ar": "مهرجان وطني يجمع بين الفنون التشكيلية والفنون البصرية",
                "fr": "Festival national alliant arts plastiques et arts visuels",
                "en": "National festival combining plastic arts and visual arts"
            },
            dates={
                "ar": "من 27 سبتمبر إلى 1 أكتوبر 2025",
                "fr": "Du 27 septembre au 1 octobre 2025",
                "en": "From September 27 to October 1, 2025"
            },
            location={
                "ar": "الأغواط، الجزائر",
                "fr": "Laghouat, Algérie",
                "en": "Laghouat, Algeria"
            }
        )
        await db.festival.insert_one(default_festival.dict())
        return default_festival
    
    return Festival(**festival)

@admin_router.put("/festival", response_model=Festival)
async def update_festival(festival_update: FestivalUpdate):
    festival = await db.festival.find_one({})
    if not festival:
        raise HTTPException(status_code=404, detail="Festival not found")
    
    update_data = festival_update.dict(exclude_unset=True)
    update_data["updated_at"] = datetime.utcnow()
    
    await db.festival.update_one(
        {"_id": festival["_id"]},
        {"$set": update_data}
    )
    
    updated_festival = await db.festival.find_one({"_id": festival["_id"]})
    return Festival(**updated_festival)

# Artist Management
@admin_router.get("/artists", response_model=List[Artist])
async def get_artists():
    artists = await db.artists.find().to_list(1000)
    return [Artist(**artist) for artist in artists]

@admin_router.post("/artists", response_model=Artist)
async def create_artist(artist: ArtistCreate):
    artist_dict = artist.dict()
    artist_obj = Artist(**artist_dict)
    await db.artists.insert_one(artist_obj.dict())
    return artist_obj

@admin_router.put("/artists/{artist_id}", response_model=Artist)
async def update_artist(artist_id: str, artist_update: ArtistUpdate):
    artist = await db.artists.find_one({"id": artist_id})
    if not artist:
        raise HTTPException(status_code=404, detail="Artist not found")
    
    update_data = artist_update.dict(exclude_unset=True)
    update_data["updated_at"] = datetime.utcnow()
    
    await db.artists.update_one(
        {"id": artist_id},
        {"$set": update_data}
    )
    
    updated_artist = await db.artists.find_one({"id": artist_id})
    return Artist(**updated_artist)

@admin_router.delete("/artists/{artist_id}")
async def delete_artist(artist_id: str):
    result = await db.artists.delete_one({"id": artist_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Artist not found")
    return {"message": "Artist deleted successfully"}

# Film Management
@admin_router.get("/films", response_model=List[Film])
async def get_films():
    films = await db.films.find().to_list(1000)
    return [Film(**film) for film in films]

@admin_router.post("/films", response_model=Film)
async def create_film(film: FilmCreate):
    film_dict = film.dict()
    film_obj = Film(**film_dict)
    await db.films.insert_one(film_obj.dict())
    return film_obj

@admin_router.put("/films/{film_id}", response_model=Film)
async def update_film(film_id: str, film_update: FilmUpdate):
    film = await db.films.find_one({"id": film_id})
    if not film:
        raise HTTPException(status_code=404, detail="Film not found")
    
    update_data = film_update.dict(exclude_unset=True)
    update_data["updated_at"] = datetime.utcnow()
    
    await db.films.update_one(
        {"id": film_id},
        {"$set": update_data}
    )
    
    updated_film = await db.films.find_one({"id": film_id})
    return Film(**updated_film)

@admin_router.delete("/films/{film_id}")
async def delete_film(film_id: str):
    result = await db.films.delete_one({"id": film_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Film not found")
    return {"message": "Film deleted successfully"}

# Program Management
@admin_router.get("/program", response_model=List[ProgramDay])
async def get_program():
    program = await db.program.find().sort("day", 1).to_list(1000)
    return [ProgramDay(**day) for day in program]

@admin_router.post("/program", response_model=ProgramDay)
async def create_program_day(program_day: ProgramDayCreate):
    program_dict = program_day.dict()
    program_obj = ProgramDay(**program_dict)
    await db.program.insert_one(program_obj.dict())
    return program_obj

@admin_router.put("/program/{day_id}", response_model=ProgramDay)
async def update_program_day(day_id: str, program_update: ProgramDayUpdate):
    program_day = await db.program.find_one({"id": day_id})
    if not program_day:
        raise HTTPException(status_code=404, detail="Program day not found")
    
    update_data = program_update.dict(exclude_unset=True)
    update_data["updated_at"] = datetime.utcnow()
    
    await db.program.update_one(
        {"id": day_id},
        {"$set": update_data}
    )
    
    updated_program_day = await db.program.find_one({"id": day_id})
    return ProgramDay(**updated_program_day)

@admin_router.delete("/program/{day_id}")
async def delete_program_day(day_id: str):
    result = await db.program.delete_one({"id": day_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Program day not found")
    return {"message": "Program day deleted successfully"}

# Gallery Management
@admin_router.get("/gallery", response_model=List[GalleryItem])
async def get_gallery():
    gallery = await db.gallery.find().to_list(1000)
    return [GalleryItem(**item) for item in gallery]

@admin_router.post("/gallery", response_model=GalleryItem)
async def create_gallery_item(gallery_item: GalleryItemCreate):
    gallery_dict = gallery_item.dict()
    gallery_obj = GalleryItem(**gallery_dict)
    await db.gallery.insert_one(gallery_obj.dict())
    return gallery_obj

@admin_router.put("/gallery/{item_id}", response_model=GalleryItem)
async def update_gallery_item(item_id: str, gallery_update: GalleryItemUpdate):
    gallery_item = await db.gallery.find_one({"id": item_id})
    if not gallery_item:
        raise HTTPException(status_code=404, detail="Gallery item not found")
    
    update_data = gallery_update.dict(exclude_unset=True)
    update_data["updated_at"] = datetime.utcnow()
    
    await db.gallery.update_one(
        {"id": item_id},
        {"$set": update_data}
    )
    
    updated_gallery_item = await db.gallery.find_one({"id": item_id})
    return GalleryItem(**updated_gallery_item)

@admin_router.delete("/gallery/{item_id}")
async def delete_gallery_item(item_id: str):
    result = await db.gallery.delete_one({"id": item_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Gallery item not found")
    return {"message": "Gallery item deleted successfully"}

# Contact Management
@admin_router.get("/contacts", response_model=List[Contact])
async def get_contacts():
    contacts = await db.contacts.find().sort("created_at", -1).to_list(1000)
    return [Contact(**contact) for contact in contacts]

@admin_router.put("/contacts/{contact_id}", response_model=Contact)
async def update_contact(contact_id: str, contact_update: ContactUpdate):
    contact = await db.contacts.find_one({"id": contact_id})
    if not contact:
        raise HTTPException(status_code=404, detail="Contact not found")
    
    update_data = contact_update.dict(exclude_unset=True)
    update_data["updated_at"] = datetime.utcnow()
    
    await db.contacts.update_one(
        {"id": contact_id},
        {"$set": update_data}
    )
    
    updated_contact = await db.contacts.find_one({"id": contact_id})
    return Contact(**updated_contact)

@admin_router.delete("/contacts/{contact_id}")
async def delete_contact(contact_id: str):
    result = await db.contacts.delete_one({"id": contact_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Contact not found")
    return {"message": "Contact deleted successfully"}

# Newsletter Management
@admin_router.get("/newsletter", response_model=List[Newsletter])
async def get_newsletter_subscribers():
    subscribers = await db.newsletter.find().sort("created_at", -1).to_list(1000)
    return [Newsletter(**subscriber) for subscriber in subscribers]

# Vote Management
@admin_router.get("/votes", response_model=List[Vote])
async def get_votes():
    votes = await db.votes.find().sort("created_at", -1).to_list(1000)
    return [Vote(**vote) for vote in votes]

@admin_router.get("/votes/results")
async def get_vote_results():
    pipeline = [
        {"$group": {
            "_id": "$film_title",
            "film_id": {"$first": "$film_id"},
            "votes": {"$sum": 1}
        }},
        {"$sort": {"votes": -1}}
    ]
    
    results = await db.votes.aggregate(pipeline).to_list(1000)
    return results