from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Any
from datetime import datetime
import uuid

# Festival Models
class Festival(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: Dict[str, str]  # {ar: "", fr: "", en: ""}
    description: Dict[str, str]
    dates: Dict[str, str]
    location: Dict[str, str]
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class FestivalCreate(BaseModel):
    name: Dict[str, str]
    description: Dict[str, str]
    dates: Dict[str, str]
    location: Dict[str, str]

class FestivalUpdate(BaseModel):
    name: Optional[Dict[str, str]] = None
    description: Optional[Dict[str, str]] = None
    dates: Optional[Dict[str, str]] = None
    location: Optional[Dict[str, str]] = None

# Artist Models
class Artist(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    specialty: Dict[str, str]
    bio: Dict[str, str]
    email: Optional[str] = None
    phone: Optional[str] = None
    image_url: Optional[str] = None
    social_media: Optional[Dict[str, str]] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class ArtistCreate(BaseModel):
    name: str
    specialty: Dict[str, str]
    bio: Dict[str, str]
    email: Optional[str] = None
    phone: Optional[str] = None
    image_url: Optional[str] = None
    social_media: Optional[Dict[str, str]] = None

class ArtistUpdate(BaseModel):
    name: Optional[str] = None
    specialty: Optional[Dict[str, str]] = None
    bio: Optional[Dict[str, str]] = None
    email: Optional[str] = None
    phone: Optional[str] = None
    image_url: Optional[str] = None
    social_media: Optional[Dict[str, str]] = None

# Film Models
class Film(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    director: str
    duration: str
    description: Dict[str, str]
    theme: Dict[str, str]
    session: int
    poster_url: Optional[str] = None
    trailer_url: Optional[str] = None
    votes: int = 0
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class FilmCreate(BaseModel):
    title: str
    director: str
    duration: str
    description: Dict[str, str]
    theme: Dict[str, str]
    session: int
    poster_url: Optional[str] = None
    trailer_url: Optional[str] = None

class FilmUpdate(BaseModel):
    title: Optional[str] = None
    director: Optional[str] = None
    duration: Optional[str] = None
    description: Optional[Dict[str, str]] = None
    theme: Optional[Dict[str, str]] = None
    session: Optional[int] = None
    poster_url: Optional[str] = None
    trailer_url: Optional[str] = None

# Program Models
class ProgramActivity(BaseModel):
    time: str
    title: Dict[str, str]
    details: Optional[Dict[str, str]] = None

class ProgramDay(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    day: int
    date: str
    morning: Optional[ProgramActivity] = None
    afternoon: Optional[ProgramActivity] = None
    evening: Optional[ProgramActivity] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class ProgramDayCreate(BaseModel):
    day: int
    date: str
    morning: Optional[ProgramActivity] = None
    afternoon: Optional[ProgramActivity] = None
    evening: Optional[ProgramActivity] = None

class ProgramDayUpdate(BaseModel):
    day: Optional[int] = None
    date: Optional[str] = None
    morning: Optional[ProgramActivity] = None
    afternoon: Optional[ProgramActivity] = None
    evening: Optional[ProgramActivity] = None

# Gallery Models
class GalleryItem(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    description: str
    image_url: str
    category: str  # watercolor, film, event
    artist_name: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class GalleryItemCreate(BaseModel):
    title: str
    description: str
    image_url: str
    category: str
    artist_name: Optional[str] = None

class GalleryItemUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    image_url: Optional[str] = None
    category: Optional[str] = None
    artist_name: Optional[str] = None

# Contact Models
class Contact(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: Optional[str] = None
    subject: str
    message: str
    type: str  # general, artist, media, sponsor
    status: str = "new"  # new, read, replied
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class ContactCreate(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    subject: str
    message: str
    type: str = "general"

class ContactUpdate(BaseModel):
    status: Optional[str] = None

# Newsletter Models
class Newsletter(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: str
    status: str = "active"  # active, unsubscribed
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class NewsletterCreate(BaseModel):
    email: str

# Vote Models
class Vote(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    film_id: str
    film_title: str
    voter_ip: str
    created_at: datetime = Field(default_factory=datetime.utcnow)

class VoteCreate(BaseModel):
    film_id: str
    film_title: str
    voter_ip: str

# Admin Models
class AdminUser(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    username: str
    email: str
    password_hash: str
    is_active: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class AdminLogin(BaseModel):
    username: str
    password: str

class AdminToken(BaseModel):
    access_token: str
    token_type: str = "bearer"

# Statistics Models
class Statistics(BaseModel):
    total_artists: int
    total_films: int
    total_votes: int
    total_contacts: int
    total_newsletter_subscribers: int
    created_at: datetime = Field(default_factory=datetime.utcnow)