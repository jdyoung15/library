const initialBookData = [
  {
    "series": "", 
    "author": {
      "lastName": "Tyler", 
      "firstName": "Steven"
    }, 
    "title": "Does the Noise in My Head Bother You"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Vonnegut", 
      "firstName": "Kurt"
    }, 
    "title": "Breakfast of Champions"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Thackeray", 
      "firstName": "William Makepeace"
    }, 
    "title": "Vanity Fair"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Verne", 
      "firstName": "Jules"
    }, 
    "title": "Collected Works of Jules Verne"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Vogler", 
      "firstName": "Christopher"
    }, 
    "title": "The Writer's Journey"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Verne", 
      "firstName": "Jules"
    }, 
    "title": "Twenty Thousand Leagues Under the Sea"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Vonnegut", 
      "firstName": "Kurt"
    }, 
    "title": "Slaughterhouse Five"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Taubes", 
      "firstName": "Gary"
    }, 
    "title": "Good Calories, Bad Calories"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Twain", 
      "firstName": "Mark"
    }, 
    "title": "A Connecticut Yankee in King Arthur's Court"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Vonnegut", 
      "firstName": "Kurt"
    }, 
    "title": "Deadeye Dick"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Thompson", 
      "firstName": "Hunter S."
    }, 
    "title": "The Great Shark Hunt"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Vonnegut", 
      "firstName": "Kurt"
    }, 
    "title": "Cat's Cradle"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Tolkien", 
      "firstName": "J.R.R."
    }, 
    "title": "The Silmarillion"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Toole", 
      "firstName": "John Kennedy"
    }, 
    "title": "A Confederacy of Dunces"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Tolle", 
      "firstName": "Eckhart"
    }, 
    "title": "A New Earth"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Tobias", 
      "firstName": "Ronald"
    }, 
    "title": "20 Master Plots and How To Build Them"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Tan", 
      "firstName": "Amy"
    }, 
    "title": "The Bonesetter's Daughter"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Thompson", 
      "firstName": "Hunter S."
    }, 
    "title": "The Rum Diary"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Tan", 
      "firstName": "Amy"
    }, 
    "title": "The Joy Luck Club"
  }, 
  {
    "series": "Monkeewrench 02", 
    "author": {
      "lastName": "Tracy", 
      "firstName": "P.J."
    }, 
    "title": "Live Bait"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Tzu", 
      "firstName": "Sun"
    }, 
    "title": "The Art of War"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Vonnegut", 
      "firstName": "Kurt"
    }, 
    "title": "Mother Night"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Twain", 
      "firstName": "Mark"
    }, 
    "title": "The Adventures of Huckleberry Finn"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Thoreau", 
      "firstName": "Henry David"
    }, 
    "title": "Walden"
  }, 
  {
    "series": "Rabbit 04", 
    "author": {
      "lastName": "Updike", 
      "firstName": "John"
    }, 
    "title": "Rabbit at Rest"
  }, 
  {
    "series": "Rabbit 02", 
    "author": {
      "lastName": "Updike", 
      "firstName": "John"
    }, 
    "title": "Rabbit Redux"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Thompson", 
      "firstName": "Hunter S."
    }, 
    "title": "Fear and Loathing in Las Vegas"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "", 
      "firstName": "Virgil"
    }, 
    "title": "The Aeneid"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Tolkien", 
      "firstName": "J.R.R."
    }, 
    "title": "The Children of Hurin"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Verne", 
      "firstName": "Jules"
    }, 
    "title": "A Journey to the Center of the Earth"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Tolkien", 
      "firstName": "J.R.R."
    }, 
    "title": "The Hobbit"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Vonnegut", 
      "firstName": "Kurt"
    }, 
    "title": "Galapagos"
  }, 
  {
    "series": "Rabbit 01", 
    "author": {
      "lastName": "Updike", 
      "firstName": "John"
    }, 
    "title": "Rabbit, Run"
  }, 
  {
    "series": "Rabbit 03", 
    "author": {
      "lastName": "Updike", 
      "firstName": "John"
    }, 
    "title": "Rabbit is Rich"
  }, 
  {
    "series": "Monkeewrench 01", 
    "author": {
      "lastName": "Tracy", 
      "firstName": "P.J."
    }, 
    "title": "Want to Play"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Taubes", 
      "firstName": "Gary"
    }, 
    "title": "Why We Get Fat and What To Do About It"
  }, 
  {
    "series": "The Lord of the Rings 03", 
    "author": {
      "lastName": "Tolkien", 
      "firstName": "J.R.R."
    }, 
    "title": "The Return of the King"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Tarkington", 
      "firstName": "Booth"
    }, 
    "title": "The Magnificent Ambersons"
  }, 
  {
    "series": "Monkeewrench 03", 
    "author": {
      "lastName": "Tracy", 
      "firstName": "P.J."
    }, 
    "title": "Dead Run"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Vonnegut", 
      "firstName": "Kurt"
    }, 
    "title": "Player Piano"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Vonnegut", 
      "firstName": "Kurt"
    }, 
    "title": "A Man Without a Country"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Vinge", 
      "firstName": "Vernor"
    }, 
    "title": "A Fire Upon the Deep"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Truby", 
      "firstName": "John"
    }, 
    "title": "The Anatomy of Story"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "", 
      "firstName": "Voltaire"
    }, 
    "title": "Candide"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Twain", 
      "firstName": "Mark"
    }, 
    "title": "The Adventures of Tom Sawyer"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Thorne", 
      "firstName": "David"
    }, 
    "title": "The Internet is a Playground"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Taibbi", 
      "firstName": "Matt"
    }, 
    "title": "The Great Derangement"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Vinge", 
      "firstName": "Vernor"
    }, 
    "title": "A Deepness in the Sky"
  }, 
  {
    "series": "The Lord of the Rings 02", 
    "author": {
      "lastName": "Tolkien", 
      "firstName": "J.R.R."
    }, 
    "title": "The Two Towers"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Verghese", 
      "firstName": "Abraham"
    }, 
    "title": "Cutting for Stone"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Twain", 
      "firstName": "Mark"
    }, 
    "title": "The Prince and the Pauper"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Twain", 
      "firstName": "Mark"
    }, 
    "title": "Autobiography of Mark Twain"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Taibbi", 
      "firstName": "Matt"
    }, 
    "title": "Griftopia"
  }, 
  {
    "series": "The Lord of the Rings 01", 
    "author": {
      "lastName": "Tolkien", 
      "firstName": "J.R.R."
    }, 
    "title": "The Fellowship of the Ring"
  }, 
  {
    "series": "Monkeewrench 04", 
    "author": {
      "lastName": "Tracy", 
      "firstName": "P.J."
    }, 
    "title": "Snow Blind"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Thompson", 
      "firstName": "Hunter S."
    }, 
    "title": "Hell's Angels"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Tolle", 
      "firstName": "Eckhart"
    }, 
    "title": "The Power of Now"
  }, 
  {
    "series": "Bones 03", 
    "author": {
      "lastName": "Reichs", 
      "firstName": "Kathy"
    }, 
    "title": "Deadly Decisions"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Rutherfurd", 
      "firstName": "Edward"
    }, 
    "title": "New York"
  }, 
  {
    "series": "Percy Jackson 2", 
    "author": {
      "lastName": "Riordan", 
      "firstName": "Rick"
    }, 
    "title": "The Sea of Monsters"
  }, 
  {
    "series": "In Death 17", 
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Imitation in Death"
  }, 
  {
    "series": "In Death 05", 
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Ceremony in Death"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Rand", 
      "firstName": "Ayn"
    }, 
    "title": "Atlas Shrugged"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Quinn", 
      "firstName": "Daniel"
    }, 
    "title": "Ishmael"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "", 
      "firstName": "Religion"
    }, 
    "title": "The Quran"
  }, 
  {
    "series": "In Death 30", 
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Fantasy in Death"
  }, 
  {
    "series": "Bones 04", 
    "author": {
      "lastName": "Reichs", 
      "firstName": "Kathy"
    }, 
    "title": "Fatal Voyage"
  }, 
  {
    "series": "Percy Jackson 5", 
    "author": {
      "lastName": "Riordan", 
      "firstName": "Rick"
    }, 
    "title": "The Last Olympian"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Roth", 
      "firstName": "Philip"
    }, 
    "title": "American Pastoral"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Rossi", 
      "firstName": "Portia de"
    }, 
    "title": "Unbearable Lightness, A Story of Loss and Gain"
  }, 
  {
    "series": "Harry Potter 06", 
    "author": {
      "lastName": "Rowling", 
      "firstName": "J.K."
    }, 
    "title": "Harry Potter and the Half-Blood Prince"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Rittenberg", 
      "firstName": "Ann"
    }, 
    "title": "Your First Novel"
  }, 
  {
    "series": "Bones 05", 
    "author": {
      "lastName": "Reichs", 
      "firstName": "Kathy"
    }, 
    "title": "Grave Secrets"
  }, 
  {
    "series": "The Vampire Chronicles 09", 
    "author": {
      "lastName": "Rice", 
      "firstName": "Anne"
    }, 
    "title": "Blackwood Farm"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Rand", 
      "firstName": "Ayn"
    }, 
    "title": "Anthem"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Remarque", 
      "firstName": "Erich Maria"
    }, 
    "title": "All Quiet on the Western Front"
  }, 
  {
    "series": "The Vampire Chronicles 03", 
    "author": {
      "lastName": "Rice", 
      "firstName": "Anne"
    }, 
    "title": "The Queen of the Damned"
  }, 
  {
    "series": "In Death 19", 
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Visions in Death"
  }, 
  {
    "series": "Bones 01", 
    "author": {
      "lastName": "Reichs", 
      "firstName": "Kathy"
    }, 
    "title": "Deja Dead"
  }, 
  {
    "series": "Harry Potter 01", 
    "author": {
      "lastName": "Rowling", 
      "firstName": "J.K."
    }, 
    "title": "Harry Potter and the Sorcerer's Stone"
  }, 
  {
    "series": "The Kane Chronicles 02", 
    "author": {
      "lastName": "Riordan", 
      "firstName": "Rick"
    }, 
    "title": "Throne of Fire"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Roach", 
      "firstName": "Mary"
    }, 
    "title": "Packing for Mars"
  }, 
  {
    "series": "Harry Potter 05", 
    "author": {
      "lastName": "Rowling", 
      "firstName": "J.K."
    }, 
    "title": "Harry Potter and the Order of the Phoenix"
  }, 
  {
    "series": "In Death 18", 
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Divided in Death"
  }, 
  {
    "series": "Harry Potter 07", 
    "author": {
      "lastName": "Rowling", 
      "firstName": "J.K."
    }, 
    "title": "Harry Potter and the Deathly Hallows"
  }, 
  {
    "series": "In Death 24", 
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Innocent in Death"
  }, 
  {
    "series": "The Vampire Chronicles 08", 
    "author": {
      "lastName": "Rice", 
      "firstName": "Anne"
    }, 
    "title": "Blood and Gold"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Rutherfurd", 
      "firstName": "Edward"
    }, 
    "title": "London"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Rumsfeld", 
      "firstName": "Donald"
    }, 
    "title": "Known and Unknown"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Rushdie", 
      "firstName": "Salman"
    }, 
    "title": "The Satanic Verses"
  }, 
  {
    "series": "Percy Jackson 3", 
    "author": {
      "lastName": "Riordan", 
      "firstName": "Rick"
    }, 
    "title": "The Titan's Curse"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Riordan", 
      "firstName": "Rick"
    }, 
    "title": "The Red Pyramid"
  }, 
  {
    "series": "The Vampire Chronicles 06", 
    "author": {
      "lastName": "Rice", 
      "firstName": "Anne"
    }, 
    "title": "The Vampire Armand"
  }, 
  {
    "series": "Bones 10", 
    "author": {
      "lastName": "Reichs", 
      "firstName": "Kathy"
    }, 
    "title": "Bones to Ashes"
  }, 
  {
    "series": "In Death 02", 
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Glory in Death"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Rutherfurd", 
      "firstName": "Edward"
    }, 
    "title": "The Forest"
  }, 
  {
    "series": "In Death 04", 
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Rapture in Death"
  }, 
  {
    "series": "Bones 12", 
    "author": {
      "lastName": "Reichs", 
      "firstName": "Kathy"
    }, 
    "title": "206 Bones"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Richards", 
      "firstName": "Keith"
    }, 
    "title": "Life"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Roy", 
      "firstName": "Arundhati"
    }, 
    "title": "The God of Small Things"
  }, 
  {
    "series": "Percy Jackson 1", 
    "author": {
      "lastName": "Riordan", 
      "firstName": "Rick"
    }, 
    "title": "The Lightning Thief"
  }, 
  {
    "series": "Bones 06", 
    "author": {
      "lastName": "Reichs", 
      "firstName": "Kathy"
    }, 
    "title": "Bare Bones"
  }, 
  {
    "series": "In Death 31", 
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Indulgence in Death"
  }, 
  {
    "series": "In Death 13", 
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Seduction in Death"
  }, 
  {
    "series": "In Death 32", 
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Treachery in Death"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Roach", 
      "firstName": "Mary"
    }, 
    "title": "Stiff, The Curious Lives of Human Cadavers"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Rath", 
      "firstName": "Tom"
    }, 
    "title": "StrengthsFinder 2.0"
  }, 
  {
    "series": "Bones 14", 
    "author": {
      "lastName": "Reichs", 
      "firstName": "Kathy"
    }, 
    "title": "Virals"
  }, 
  {
    "series": "In Death 15", 
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Purity in Death"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Roth", 
      "firstName": "Philip"
    }, 
    "title": "Portnoy's Complaint"
  }, 
  {
    "series": "Bones 02", 
    "author": {
      "lastName": "Reichs", 
      "firstName": "Kathy"
    }, 
    "title": "Death Du Jour"
  }, 
  {
    "series": "In Death 09", 
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Loyalty in Death"
  }, 
  {
    "series": "In Death 10", 
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Witness in Death"
  }, 
  {
    "series": "In Death 28", 
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Promises in Death"
  }, 
  {
    "series": "The Vampire Chronicles 07", 
    "author": {
      "lastName": "Rice", 
      "firstName": "Anne"
    }, 
    "title": "Merrick"
  }, 
  {
    "series": "In Death 23", 
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Born in Death"
  }, 
  {
    "series": "The Vampire Chronicles 04", 
    "author": {
      "lastName": "Rice", 
      "firstName": "Anne"
    }, 
    "title": "The Tale of the Body Thief"
  }, 
  {
    "series": "In Death 01", 
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Naked in Death"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Rand", 
      "firstName": "Ayn"
    }, 
    "title": "The Fountainhead"
  }, 
  {
    "series": "In Death 26", 
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Strangers in Death"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Roth", 
      "firstName": "Philip"
    }, 
    "title": "The Human Stain"
  }, 
  {
    "series": "In Death 27", 
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Salvation in Death"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Ricks", 
      "firstName": "Thomas"
    }, 
    "title": "Fiasco, The American Military Adventure in Iraq"
  }, 
  {
    "series": "In Death 07", 
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Holiday in Death"
  }, 
  {
    "series": "In Death 12", 
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Betrayal in Death"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Rand", 
      "firstName": "Ayn"
    }, 
    "title": "We the Living"
  }, 
  {
    "series": "In Death 16", 
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Portrait in Death"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "", 
      "firstName": "Religion"
    }, 
    "title": "The Bible"
  }, 
  {
    "series": "Bones 09", 
    "author": {
      "lastName": "Reichs", 
      "firstName": "Kathy"
    }, 
    "title": "Break No Bones"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Rosnay", 
      "firstName": "Tatiana"
    }, 
    "title": "Sarah's Key"
  }, 
  {
    "series": "The Vampire Chronicles 02", 
    "author": {
      "lastName": "Rice", 
      "firstName": "Anne"
    }, 
    "title": "The Vampire Lestat"
  }, 
  {
    "series": "In Death 22", 
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Memory in Death"
  }, 
  {
    "series": "In Death 03", 
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Immortal in Death"
  }, 
  {
    "series": "Percy Jackson 4", 
    "author": {
      "lastName": "Riordan", 
      "firstName": "Rick"
    }, 
    "title": "The Battle of the Labyrinth"
  }, 
  {
    "series": "In Death 08", 
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Conspiracy in Death"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Robinson", 
      "firstName": "Marilynne"
    }, 
    "title": "Gilead"
  }, 
  {
    "series": "The Vampire Chronicles 10", 
    "author": {
      "lastName": "Rice", 
      "firstName": "Anne"
    }, 
    "title": "Blood Canticle"
  }, 
  {
    "series": "In Death 14", 
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Reunion in Death"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Rachman", 
      "firstName": "Tom"
    }, 
    "title": "The Imperfectionists"
  }, 
  {
    "series": "Bones 13", 
    "author": {
      "lastName": "Reichs", 
      "firstName": "Kathy"
    }, 
    "title": "Spider Bones"
  }, 
  {
    "series": "In Death 29", 
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Kindred in Death"
  }, 
  {
    "series": "In Death 06", 
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Vengeance in Death"
  }, 
  {
    "series": "The Vampire Chronicles 05", 
    "author": {
      "lastName": "Rice", 
      "firstName": "Anne"
    }, 
    "title": "Memnoch the Devil"
  }, 
  {
    "series": "Bones 11", 
    "author": {
      "lastName": "Reichs", 
      "firstName": "Kathy"
    }, 
    "title": "Devil Bones"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Rutherfurd", 
      "firstName": "Edward"
    }, 
    "title": "Sarum"
  }, 
  {
    "series": "Harry Potter 02", 
    "author": {
      "lastName": "Rowling", 
      "firstName": "J.K."
    }, 
    "title": "Harry Potter and the Chamber of Secrets"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Rawles", 
      "firstName": "James Wesley"
    }, 
    "title": "How to Survive the End of the World as We Know It"
  }, 
  {
    "series": "Bones 07", 
    "author": {
      "lastName": "Reichs", 
      "firstName": "Kathy"
    }, 
    "title": "Monday Mourning"
  }, 
  {
    "series": "Kingkiller Chronicles 01", 
    "author": {
      "lastName": "Rothfuss", 
      "firstName": "Patrick"
    }, 
    "title": "The Name of the Wind"
  }, 
  {
    "series": "The Vampire Chronicles 01", 
    "author": {
      "lastName": "Rice", 
      "firstName": "Anne"
    }, 
    "title": "Interview with the Vampire"
  }, 
  {
    "series": "In Death 21", 
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Origin in Death"
  }, 
  {
    "series": "Bones 08", 
    "author": {
      "lastName": "Reichs", 
      "firstName": "Kathy"
    }, 
    "title": "Cross Bones"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Riordan", 
      "firstName": "Rick"
    }, 
    "title": "The Lost Hero"
  }, 
  {
    "series": "Harry Potter 03", 
    "author": {
      "lastName": "Rowling", 
      "firstName": "J.K."
    }, 
    "title": "Harry Potter and the Prisoner of Azkaban"
  }, 
  {
    "series": "Harry Potter 04", 
    "author": {
      "lastName": "Rowling", 
      "firstName": "J.K."
    }, 
    "title": "Harry Potter and the Goblet Of Fire"
  }, 
  {
    "series": "Kingkiller Chronicles 02", 
    "author": {
      "lastName": "Rothfuss", 
      "firstName": "Patrick"
    }, 
    "title": "The Wise Man's Fear"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Rowling", 
      "firstName": "J.K."
    }, 
    "title": "The Tales of Beedle the Bard"
  }, 
  {
    "series": "In Death 20", 
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Survivor in Death"
  }, 
  {
    "series": "In Death 25", 
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Creation in Death"
  }, 
  {
    "series": "In Death 11", 
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Judgment in Death"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Rand", 
      "firstName": "Ayn"
    }, 
    "title": "The Virtue of Selfishness"
  }, 
  {
    "series": "Prydain 05", 
    "author": {
      "lastName": "Alexander", 
      "firstName": "Lloyd"
    }, 
    "title": "The High King"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "", 
      "firstName": "Aesop"
    }, 
    "title": "Aesop's Fables"
  }, 
  {
    "series": "Dirk Gently 02", 
    "author": {
      "lastName": "Adams", 
      "firstName": "Douglas"
    }, 
    "title": "The Long Dark Tea-Time of the Soul"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Ambrose", 
      "firstName": "Stephen E."
    }, 
    "title": "Citizen Soldiers"
  }, 
  {
    "series": "Prydain 04", 
    "author": {
      "lastName": "Alexander", 
      "firstName": "Lloyd"
    }, 
    "title": "Taran Wanderer"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Agee", 
      "firstName": "James"
    }, 
    "title": "A Death In The Family"
  }, 
  {
    "series": "Incarnations 02", 
    "author": {
      "lastName": "Anthony", 
      "firstName": "Piers"
    }, 
    "title": "Bearing an Hourglass"
  }, 
  {
    "series": "Earth's Children 05", 
    "author": {
      "lastName": "Auel", 
      "firstName": "Jean M."
    }, 
    "title": "The Shelters of Stone"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Achebe", 
      "firstName": "Chinua"
    }, 
    "title": "Things Fall Apart"
  }, 
  {
    "series": "Incarnations 03", 
    "author": {
      "lastName": "Anthony", 
      "firstName": "Piers"
    }, 
    "title": "With a Tangled Skein"
  }, 
  {
    "series": "Incarnations 04", 
    "author": {
      "lastName": "Anthony", 
      "firstName": "Piers"
    }, 
    "title": "Wielding a Red Sword"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Austen", 
      "firstName": "Jane"
    }, 
    "title": "Sense and Sensibility"
  }, 
  {
    "series": "Incarnations 08", 
    "author": {
      "lastName": "Anthony", 
      "firstName": "Piers"
    }, 
    "title": "Under a Velvet Cloak"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Atwood", 
      "firstName": "Margaret"
    }, 
    "title": "Alias Grace"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Albom", 
      "firstName": "Mitch"
    }, 
    "title": "The Five People You Meet In Heaven"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Atwood", 
      "firstName": "Margaret"
    }, 
    "title": "The Handmaid's Tale"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Abbot", 
      "firstName": "Edwin"
    }, 
    "title": "Flatland"
  }, 
  {
    "series": "First Law 02", 
    "author": {
      "lastName": "Abercrombie", 
      "firstName": "Joe"
    }, 
    "title": "Before They Are Hanged"
  }, 
  {
    "series": "Incarnations 05", 
    "author": {
      "lastName": "Anthony", 
      "firstName": "Piers"
    }, 
    "title": "Being a Green Mother"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Austen", 
      "firstName": "Jane"
    }, 
    "title": "Persuasion"
  }, 
  {
    "series": "Hitchhiker 03", 
    "author": {
      "lastName": "Adams", 
      "firstName": "Douglas"
    }, 
    "title": "Life, the Universe and Everything"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Ambrose", 
      "firstName": "Hugh"
    }, 
    "title": "The Pacific"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Archer", 
      "firstName": "Jeffrey"
    }, 
    "title": "Kane and Abel"
  }, 
  {
    "series": "Foundation 03", 
    "author": {
      "lastName": "Asmiov", 
      "firstName": "Isaac"
    }, 
    "title": "Second Foundation"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Albom", 
      "firstName": "Mitch"
    }, 
    "title": "Tuesdays With Morrie"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Austen", 
      "firstName": "Jane"
    }, 
    "title": "Emma"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Austen", 
      "firstName": "Jane"
    }, 
    "title": "Pride and Prejudice"
  }, 
  {
    "series": "Prydain 03", 
    "author": {
      "lastName": "Alexander", 
      "firstName": "Lloyd"
    }, 
    "title": "The Castle of Llyr"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Atwood", 
      "firstName": "Margaret"
    }, 
    "title": "Oryx and Crake"
  }, 
  {
    "series": "Hitchhiker 05", 
    "author": {
      "lastName": "Adams", 
      "firstName": "Douglas"
    }, 
    "title": "Mostly Harmless"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Austen", 
      "firstName": "Jane"
    }, 
    "title": "Northanger Abbey"
  }, 
  {
    "series": "Earth's Children 06", 
    "author": {
      "lastName": "Auel", 
      "firstName": "Jean M."
    }, 
    "title": "The Land of Painted Caves"
  }, 
  {
    "series": "Earth's Children 04", 
    "author": {
      "lastName": "Auel", 
      "firstName": "Jean M."
    }, 
    "title": "The Plains of Passage"
  }, 
  {
    "series": "Incarnations 07", 
    "author": {
      "lastName": "Anthony", 
      "firstName": "Piers"
    }, 
    "title": "And Eternity"
  }, 
  {
    "series": "Earth's Children 02", 
    "author": {
      "lastName": "Auel", 
      "firstName": "Jean M."
    }, 
    "title": "The Valley of Horses"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Armstrong", 
      "firstName": "Karen"
    }, 
    "title": "A History of God"
  }, 
  {
    "series": "Earth's Children 01", 
    "author": {
      "lastName": "Auel", 
      "firstName": "Jean M."
    }, 
    "title": "The Clan of the Cave Bear"
  }, 
  {
    "series": "Prydain 02", 
    "author": {
      "lastName": "Alexander", 
      "firstName": "Lloyd"
    }, 
    "title": "The Black Cauldron"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Avery", 
      "firstName": "Denis"
    }, 
    "title": "The Man Who Broke Into Auschwitz"
  }, 
  {
    "series": "Hitchhiker 04", 
    "author": {
      "lastName": "Adams", 
      "firstName": "Douglas"
    }, 
    "title": "So Long, and Thanks For All the Fish"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Adams", 
      "firstName": "Richard"
    }, 
    "title": "Shardik"
  }, 
  {
    "series": "Incarnations 06", 
    "author": {
      "lastName": "Anthony", 
      "firstName": "Piers"
    }, 
    "title": "For Love of Evil"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Abagnale", 
      "firstName": "Frank W."
    }, 
    "title": "Catch Me If You Can"
  }, 
  {
    "series": "Prydain 01", 
    "author": {
      "lastName": "Alexander", 
      "firstName": "Lloyd"
    }, 
    "title": "The Book of Three"
  }, 
  {
    "series": "Foundation 07", 
    "author": {
      "lastName": "Asmiov", 
      "firstName": "Isaac"
    }, 
    "title": "Forward the Foundation"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Austen", 
      "firstName": "Jane"
    }, 
    "title": "Mansfield Park"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Andersen", 
      "firstName": "Hans Christian"
    }, 
    "title": "Fairy Tales"
  }, 
  {
    "series": "Hitchhiker 01", 
    "author": {
      "lastName": "Adams", 
      "firstName": "Douglas"
    }, 
    "title": "The Hitchhiker's Guide to the Galaxy"
  }, 
  {
    "series": "Incarnations 01", 
    "author": {
      "lastName": "Anthony", 
      "firstName": "Piers"
    }, 
    "title": "On a Pale Horse"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Archer", 
      "firstName": "Jeffrey"
    }, 
    "title": "Not a Penny More, Not a Penny Less"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Alcott", 
      "firstName": "Louisa May"
    }, 
    "title": "Little Women"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Atwood", 
      "firstName": "Margaret"
    }, 
    "title": "The Blind Assassin"
  }, 
  {
    "series": "Foundation 01", 
    "author": {
      "lastName": "Asmiov", 
      "firstName": "Isaac"
    }, 
    "title": "Foundation"
  }, 
  {
    "series": "Foundation 05", 
    "author": {
      "lastName": "Asmiov", 
      "firstName": "Isaac"
    }, 
    "title": "Foundation and Earth"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Archer", 
      "firstName": "Jeffrey"
    }, 
    "title": "A Prisoner of Birth"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Atkinson", 
      "firstName": "Kate"
    }, 
    "title": "Started Early, Took My Dog"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Adams", 
      "firstName": "Douglas"
    }, 
    "title": "Last Chance to See"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Adams", 
      "firstName": "Richard"
    }, 
    "title": "Watership Down"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Asimov", 
      "firstName": "Isaac"
    }, 
    "title": "I, Robot"
  }, 
  {
    "series": "Foundation 02", 
    "author": {
      "lastName": "Asmiov", 
      "firstName": "Isaac"
    }, 
    "title": "Foundation and Empire"
  }, 
  {
    "series": "Foundation 04", 
    "author": {
      "lastName": "Asmiov", 
      "firstName": "Isaac"
    }, 
    "title": "Foundation's Edge"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Ambrose", 
      "firstName": "Stephen E."
    }, 
    "title": "Band of Brothers"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Abercrombie", 
      "firstName": "Joe"
    }, 
    "title": "The Heroes"
  }, 
  {
    "series": "Dirk Gently 01", 
    "author": {
      "lastName": "Adams", 
      "firstName": "Douglas"
    }, 
    "title": "Dirk Gently's Holistic Detective Agency"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Alighieri", 
      "firstName": "Dante"
    }, 
    "title": "The Divine Comedy"
  }, 
  {
    "series": "Earth's Children 03", 
    "author": {
      "lastName": "Auel", 
      "firstName": "Jean M."
    }, 
    "title": "The Mammoth Hunters"
  }, 
  {
    "series": "Foundation 06", 
    "author": {
      "lastName": "Asmiov", 
      "firstName": "Isaac"
    }, 
    "title": "Prelude to Foundation"
  }, 
  {
    "series": "First Law 01", 
    "author": {
      "lastName": "Abercrombie", 
      "firstName": "Joe"
    }, 
    "title": "The Blade Itself"
  }, 
  {
    "series": "Hitchhiker 02", 
    "author": {
      "lastName": "Adams", 
      "firstName": "Douglas"
    }, 
    "title": "The Restaurant at the End of the Universe"
  }, 
  {
    "series": "First Law 03", 
    "author": {
      "lastName": "Abercrombie", 
      "firstName": "Joe"
    }, 
    "title": "Last Argument of Kings"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Atwood", 
      "firstName": "Margaret"
    }, 
    "title": "The Year of the Flood"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Barker", 
      "firstName": "Clive"
    }, 
    "title": "Imajica"
  }, 
  {
    "series": "Calliope Reaper-Jones 02", 
    "author": {
      "lastName": "Benson", 
      "firstName": "Amber"
    }, 
    "title": "Cat's Claw"
  }, 
  {
    "series": "Harry Dresden 02", 
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Fool Moon"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Barclay", 
      "firstName": "Linwood"
    }, 
    "title": "No Time for Goodbye"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Bradbury", 
      "firstName": "Ray"
    }, 
    "title": "Fahrenheit 451"
  }, 
  {
    "series": "Harry Dresden 04", 
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Summer Knight"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Brooks", 
      "firstName": "Geraldine"
    }, 
    "title": "Caleb's Crossing"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Barry", 
      "firstName": "Max"
    }, 
    "title": "Jennifer Government"
  }, 
  {
    "series": "Harry Dresden 06", 
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Blood Rites"
  }, 
  {
    "series": "Harry Dresden 09", 
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "White Night"
  }, 
  {
    "series": "Culture 06", 
    "author": {
      "lastName": "Banks", 
      "firstName": "Iain M."
    }, 
    "title": "Look to Windward"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Butler", 
      "firstName": "Octavia"
    }, 
    "title": "Wild Seed"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Bradbury", 
      "firstName": "Ray"
    }, 
    "title": "Zen in the Art of Writing"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Brady", 
      "firstName": "Frank"
    }, 
    "title": "Endgame"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Brooks", 
      "firstName": "Max"
    }, 
    "title": "World War Z"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Burroughs", 
      "firstName": "Augusten"
    }, 
    "title": "Running with Scissors"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Berg", 
      "firstName": "Elizabeth"
    }, 
    "title": "The Pull of the Moon"
  }, 
  {
    "series": "Mercy 02", 
    "author": {
      "lastName": "Briggs", 
      "firstName": "Patricia"
    }, 
    "title": "Blood Bound"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Baigent", 
      "firstName": "Michael"
    }, 
    "title": "Holy Blood, Holy Grail"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Bryson", 
      "firstName": "Bill"
    }, 
    "title": "Made in America"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Brown", 
      "firstName": "Dan"
    }, 
    "title": "Digital Fortress"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Bulgakov", 
      "firstName": "Mikhail"
    }, 
    "title": "The Master and Margarita"
  }, 
  {
    "series": "Harry Dresden 11", 
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Turn Coat"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Bryson", 
      "firstName": "Bill"
    }, 
    "title": "A Walk in the Woods"
  }, 
  {
    "series": "Harry Dresden 08", 
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Proven Guilty"
  }, 
  {
    "series": "Mercy 01", 
    "author": {
      "lastName": "Briggs", 
      "firstName": "Patricia"
    }, 
    "title": "Moon Called"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Barry", 
      "firstName": "Dave"
    }, 
    "title": "Dave Barry's Only Travel Guide You'll Ever Need"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Baum", 
      "firstName": "L. Frank"
    }, 
    "title": "The Wonderful Wizard of Oz"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Brin", 
      "firstName": "David"
    }, 
    "title": "The Postman"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Binchy", 
      "firstName": "Maeve"
    }, 
    "title": "Circle of Friends"
  }, 
  {
    "series": "Codex Alera 06", 
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "First Lord's Fury"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Burroughs", 
      "firstName": "William"
    }, 
    "title": "Naked Lunch"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Banks", 
      "firstName": "Iain M."
    }, 
    "title": "The Crow Road"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Bush", 
      "firstName": "George W."
    }, 
    "title": "Decision Points"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Banks", 
      "firstName": "Iain M."
    }, 
    "title": "Transition"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Barker", 
      "firstName": "Clive"
    }, 
    "title": "The Damnation Game"
  }, 
  {
    "series": "02", 
    "author": {
      "lastName": "Bourne", 
      "firstName": "J.L."
    }, 
    "title": "Beyond Exile"
  }, 
  {
    "series": "Codex Alera 02", 
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Academ's Fury"
  }, 
  {
    "series": "Culture 02", 
    "author": {
      "lastName": "Banks", 
      "firstName": "Iain M."
    }, 
    "title": "The Player of Games"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Barry", 
      "firstName": "Dave"
    }, 
    "title": "Big Trouble"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Brockway", 
      "firstName": "Robert"
    }, 
    "title": "Everything Is Going to Kill Everybody"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Benchley", 
      "firstName": "Peter"
    }, 
    "title": "Jaws"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Brooks", 
      "firstName": "David"
    }, 
    "title": "The Social Animal"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Brooks", 
      "firstName": "Max"
    }, 
    "title": "The Zombie Survival Guide"
  }, 
  {
    "series": "Culture 03", 
    "author": {
      "lastName": "Banks", 
      "firstName": "Iain M."
    }, 
    "title": "Use of Weapons"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Binchy", 
      "firstName": "Maeve"
    }, 
    "title": "Echoes"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Binchy", 
      "firstName": "Maeve"
    }, 
    "title": "Heart and Soul"
  }, 
  {
    "series": "Harry Dresden 03", 
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Grave Peril"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Brooks", 
      "firstName": "Terry"
    }, 
    "title": "The Sword of Shannara"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Barclay", 
      "firstName": "Linwood"
    }, 
    "title": "Fear the Worst"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Bradbury", 
      "firstName": "Ray"
    }, 
    "title": "Something Wicked This Way Comes"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Berg", 
      "firstName": "Elizabeth"
    }, 
    "title": "Open House"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Bukowski", 
      "firstName": "Charles"
    }, 
    "title": "Women"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Birbiglia", 
      "firstName": "Mike"
    }, 
    "title": "Sleepwalk With Me, and Other Painfully True Stories"
  }, 
  {
    "series": "Culture 04", 
    "author": {
      "lastName": "Banks", 
      "firstName": "Iain M."
    }, 
    "title": "Excession"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Binchy", 
      "firstName": "Maeve"
    }, 
    "title": "Whitethorn Woods"
  }, 
  {
    "series": "Harry Dresden 10", 
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Small Favor"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Bryson", 
      "firstName": "Bill"
    }, 
    "title": "I'm a Stranger Here Myself"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Brown", 
      "firstName": "Dan"
    }, 
    "title": "The Da Vinci Code"
  }, 
  {
    "series": "Codex Alera 05", 
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Princeps' Fury"
  }, 
  {
    "series": "Mercy 05", 
    "author": {
      "lastName": "Briggs", 
      "firstName": "Patricia"
    }, 
    "title": "Silver Borne"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Bester", 
      "firstName": "Alfred"
    }, 
    "title": "The Demolished Man"
  }, 
  {
    "series": "Harry Dresden 12", 
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Changes"
  }, 
  {
    "series": "Harry Dresden 05", 
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Death Masks"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Bellow", 
      "firstName": "Saul"
    }, 
    "title": "Humboldt's Gift"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Bester", 
      "firstName": "Alfred"
    }, 
    "title": "The Stars My Destination"
  }, 
  {
    "series": "01", 
    "author": {
      "lastName": "Bourne", 
      "firstName": "J.L."
    }, 
    "title": "Day By Day Armageddon"
  }, 
  {
    "series": "Prince of Nothing 01", 
    "author": {
      "lastName": "Bakker", 
      "firstName": "R. Scott"
    }, 
    "title": "The Darkness That Comes Before"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Bradbury", 
      "firstName": "Ray"
    }, 
    "title": "The Martian Chronicles"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Burgess", 
      "firstName": "Anthony"
    }, 
    "title": "A Clockwork Orange"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Bradbury", 
      "firstName": "Ray"
    }, 
    "title": "The Illustrated Man"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Binchy", 
      "firstName": "Maeve"
    }, 
    "title": "Tara Road"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Brands", 
      "firstName": "H.W."
    }, 
    "title": "The First American"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Binchy", 
      "firstName": "Maeve"
    }, 
    "title": "Minding Frankie"
  }, 
  {
    "series": "Harry Dresden 07", 
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Dead Beat"
  }, 
  {
    "series": "Mercy 06", 
    "author": {
      "lastName": "Briggs", 
      "firstName": "Patricia"
    }, 
    "title": "River Marked"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Banks", 
      "firstName": "Iain M."
    }, 
    "title": "The Algebraist"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Bryson", 
      "firstName": "Bill"
    }, 
    "title": "A Short History of Nearly Everything"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Binchy", 
      "firstName": "Maeve"
    }, 
    "title": "The Glass Lake"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Bronte", 
      "firstName": "Charlotte"
    }, 
    "title": "Jane Eyre"
  }, 
  {
    "series": "Culture 05", 
    "author": {
      "lastName": "Banks", 
      "firstName": "Iain M."
    }, 
    "title": "Inversions"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Barbery", 
      "firstName": "Muriel"
    }, 
    "title": "The Elegance of the Hedgehog"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Bowden", 
      "firstName": "Mark"
    }, 
    "title": "Black Hawk Down"
  }, 
  {
    "series": "Codex Alera 01", 
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Furies of Calderon"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Berg", 
      "firstName": "Elizabeth"
    }, 
    "title": "Joy School"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Banks", 
      "firstName": "Iain M."
    }, 
    "title": "The Wasp Factory"
  }, 
  {
    "series": "Prince of Nothing 02", 
    "author": {
      "lastName": "Bakker", 
      "firstName": "R. Scott"
    }, 
    "title": "The Warrior Prophet"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Brett", 
      "firstName": "Peter V."
    }, 
    "title": "The Warded Man"
  }, 
  {
    "series": "Harry Dresden 01", 
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Storm Front"
  }, 
  {
    "series": "Calliope Reaper-Jones 03", 
    "author": {
      "lastName": "Benson", 
      "firstName": "Amber"
    }, 
    "title": "Serpent's Storm"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Bacigalupi", 
      "firstName": "Paolo"
    }, 
    "title": "The Windup Girl"
  }, 
  {
    "series": "Codex Alera 03", 
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Cursor's Fury"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Ballard", 
      "firstName": "J.G."
    }, 
    "title": "Crash"
  }, 
  {
    "series": "Culture 07", 
    "author": {
      "lastName": "Banks", 
      "firstName": "Iain M."
    }, 
    "title": "Matter"
  }, 
  {
    "series": "Prince of Nothing 03", 
    "author": {
      "lastName": "Bakker", 
      "firstName": "R. Scott"
    }, 
    "title": "The Thousandfold Thought"
  }, 
  {
    "series": "Calliope Reaper-Jones 01", 
    "author": {
      "lastName": "Benson", 
      "firstName": "Amber"
    }, 
    "title": "Death's Daughter"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Baldacci", 
      "firstName": "David"
    }, 
    "title": "The Winner"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Browne", 
      "firstName": "Renni"
    }, 
    "title": "Self-Editing for Fiction Writers"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Brown", 
      "firstName": "Dan"
    }, 
    "title": "The Lost Symbol"
  }, 
  {
    "series": "Mercy 04", 
    "author": {
      "lastName": "Briggs", 
      "firstName": "Patricia"
    }, 
    "title": "Bone Crossed"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Barclay", 
      "firstName": "Linwood"
    }, 
    "title": "Never Look Away"
  }, 
  {
    "series": "Mercy 03", 
    "author": {
      "lastName": "Briggs", 
      "firstName": "Patricia"
    }, 
    "title": "Iron Kissed"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Brown", 
      "firstName": "Dan"
    }, 
    "title": "Angels and Demons"
  }, 
  {
    "series": "Codex Alera 04", 
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Captain's Fury"
  }, 
  {
    "series": "Culture 01", 
    "author": {
      "lastName": "Banks", 
      "firstName": "Iain M."
    }, 
    "title": "Consider Phlebas"
  }, 
  {
    "series": "Culture 08", 
    "author": {
      "lastName": "Banks", 
      "firstName": "Iain M."
    }, 
    "title": "Surface Detail"
  }, 
  {
    "series": "Harry Dresden 13", 
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Side Jobs"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Brown", 
      "firstName": "Dan"
    }, 
    "title": "Deception Point"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Leonard", 
      "firstName": "Elmore"
    }, 
    "title": "Freaky Deaky"
  }, 
  {
    "series": "Jason Bourne 01", 
    "author": {
      "lastName": "Ludlum", 
      "firstName": "Robert"
    }, 
    "title": "The Bourne Identity"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Littell", 
      "firstName": "Jonathan"
    }, 
    "title": "The Kindly Ones"
  }, 
  {
    "series": "King Raven 01", 
    "author": {
      "lastName": "Lawhead", 
      "firstName": "Stephen R."
    }, 
    "title": "Hood"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Leonard", 
      "firstName": "Elmore"
    }, 
    "title": "Out of Sight"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Levitt", 
      "firstName": "Steven D."
    }, 
    "title": "Superfreakonomics"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Le Carre", 
      "firstName": "John"
    }, 
    "title": "The Spy Who Came in from the Cold"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Loewen", 
      "firstName": "James"
    }, 
    "title": "Lies My Teacher Told Me"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Leyner", 
      "firstName": "Mark"
    }, 
    "title": "Why Do Men Have Nipples, Hundreds of Questions You'd Only Ask a Doctor After Your Third Martini"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Lukeman", 
      "firstName": "Noah"
    }, 
    "title": "The First Five Pages"
  }, 
  {
    "series": "01", 
    "author": {
      "lastName": "Larsson", 
      "firstName": "Stieg"
    }, 
    "title": "The Girl with the Dragon Tattoo"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Lansing", 
      "firstName": "Alfred"
    }, 
    "title": "Endurance"
  }, 
  {
    "series": "Jason Bourne 02", 
    "author": {
      "lastName": "Ludlum", 
      "firstName": "Robert"
    }, 
    "title": "The Bourne Supremacy"
  }, 
  {
    "series": "Pendragon Cycle 06", 
    "author": {
      "lastName": "Lawhead", 
      "firstName": "Stephen R."
    }, 
    "title": "Avalon"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Letts", 
      "firstName": "Billie"
    }, 
    "title": "Where the Heart Is"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Liss", 
      "firstName": "David"
    }, 
    "title": "The Coffee Trader"
  }, 
  {
    "series": "Pendragon Cycle 04", 
    "author": {
      "lastName": "Lawhead", 
      "firstName": "Stephen R."
    }, 
    "title": "Pendragon"
  }, 
  {
    "series": "7", 
    "author": {
      "lastName": "Lewis", 
      "firstName": "C.S."
    }, 
    "title": "The Last Battle"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Leonard", 
      "firstName": "Elmore"
    }, 
    "title": "Riding the Rap"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Larson", 
      "firstName": "Erik"
    }, 
    "title": "Devil in the White City"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Leckie", 
      "firstName": "Robert"
    }, 
    "title": "Helmet for My Pillow, From Parris Island to the Pacific"
  }, 
  {
    "series": "Pendragon Cycle 05", 
    "author": {
      "lastName": "Lawhead", 
      "firstName": "Stephen R."
    }, 
    "title": "Grail"
  }, 
  {
    "series": "02", 
    "author": {
      "lastName": "Larsson", 
      "firstName": "Stieg"
    }, 
    "title": "The Girl Who Played with Fire"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Lewis", 
      "firstName": "Michael"
    }, 
    "title": "The Blind Side"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Leonard", 
      "firstName": "Elmore"
    }, 
    "title": "Get Shorty"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Lehane", 
      "firstName": "Dennis"
    }, 
    "title": "Darkness, Take My Hand"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Lehane", 
      "firstName": "Dennis"
    }, 
    "title": "Mystic River"
  }, 
  {
    "series": "5", 
    "author": {
      "lastName": "Lewis", 
      "firstName": "C.S."
    }, 
    "title": "The Voyage of the Dawn Treader"
  }, 
  {
    "series": "Gentlemen Bastards 01", 
    "author": {
      "lastName": "Lynch", 
      "firstName": "Scott"
    }, 
    "title": "The Lies of Locke Lamora"
  }, 
  {
    "series": "King Raven 03", 
    "author": {
      "lastName": "Lawhead", 
      "firstName": "Stephen R."
    }, 
    "title": "Tuck"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Lehane", 
      "firstName": "Dennis"
    }, 
    "title": "A Drink Before the War"
  }, 
  {
    "series": "Jason Bourne 03", 
    "author": {
      "lastName": "Ludlum", 
      "firstName": "Robert"
    }, 
    "title": "The Bourne Ultimatum"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Leonard", 
      "firstName": "Elmore"
    }, 
    "title": "Jackie Brown"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Lawrence", 
      "firstName": "D.H."
    }, 
    "title": "Lady Chatterley's Lover"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Lewis", 
      "firstName": "Michael"
    }, 
    "title": "The Big Short, Inside the Doomsday Machine"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Lowry", 
      "firstName": "Lois"
    }, 
    "title": "The Giver"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Lethem", 
      "firstName": "Jonathan"
    }, 
    "title": "Motherless Brooklyn"
  }, 
  {
    "series": "Pendragon Cycle 02", 
    "author": {
      "lastName": "Lawhead", 
      "firstName": "Stephen R."
    }, 
    "title": "Merlin"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "L'Engle", 
      "firstName": "Madeleine"
    }, 
    "title": "A Wrinkle in Time"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Leary", 
      "firstName": "Denis"
    }, 
    "title": "Why We Suck"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Lehane", 
      "firstName": "Dennis"
    }, 
    "title": "Shutter Island"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Liss", 
      "firstName": "David"
    }, 
    "title": "A Conspiracy of Paper"
  }, 
  {
    "series": "Dexter 01", 
    "author": {
      "lastName": "Lindsay", 
      "firstName": "Jeff"
    }, 
    "title": "Darkly Dreaming Dexter"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Laurie", 
      "firstName": "Hugh"
    }, 
    "title": "The Gun Seller"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Lehane", 
      "firstName": "Dennis"
    }, 
    "title": "Gone, Baby, Gone"
  }, 
  {
    "series": "2", 
    "author": {
      "lastName": "Lewis", 
      "firstName": "C.S."
    }, 
    "title": "The Lion, The Witch and The Wardrobe"
  }, 
  {
    "series": "Gentlemen Bastards 02", 
    "author": {
      "lastName": "Lynch", 
      "firstName": "Scott"
    }, 
    "title": "Red Seas Under Red Skies"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Lahiri", 
      "firstName": "Jhumpa"
    }, 
    "title": "Interpreter of Maladies"
  }, 
  {
    "series": "Dexter 03", 
    "author": {
      "lastName": "Lindsay", 
      "firstName": "Jeff"
    }, 
    "title": "Dexter in the Dark"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Lehane", 
      "firstName": "Dennis"
    }, 
    "title": "The Given Day"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Liss", 
      "firstName": "David"
    }, 
    "title": "The Whiskey Rebel"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Lehane", 
      "firstName": "Dennis"
    }, 
    "title": "Sacred"
  }, 
  {
    "series": "King Raven 02", 
    "author": {
      "lastName": "Lawhead", 
      "firstName": "Stephen R."
    }, 
    "title": "Scarlet"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Lovecraft", 
      "firstName": "H.P."
    }, 
    "title": "Definitive H.P. Lovecraft"
  }, 
  {
    "series": "3", 
    "author": {
      "lastName": "Lewis", 
      "firstName": "C.S."
    }, 
    "title": "The Horse And His Boy"
  }, 
  {
    "series": "Dexter 02", 
    "author": {
      "lastName": "Lindsay", 
      "firstName": "Jeff"
    }, 
    "title": "Dearly Devoted Dexter"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Lawrence", 
      "firstName": "D.H."
    }, 
    "title": "Sons and Lovers"
  }, 
  {
    "series": "03", 
    "author": {
      "lastName": "Larsson", 
      "firstName": "Stieg"
    }, 
    "title": "The Girl Who Kicked the Hornet's Nest"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Leonard", 
      "firstName": "Elmore"
    }, 
    "title": "Three-Ten to Yuma and Other Stories"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "London", 
      "firstName": "Jack"
    }, 
    "title": "The Call of the Wild and White Fang"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Leonard", 
      "firstName": "Elmore"
    }, 
    "title": "Cuba Libre"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Lamb", 
      "firstName": "Wally"
    }, 
    "title": "I Know This Much Is True"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Lowry", 
      "firstName": "Malcolm"
    }, 
    "title": "Under the Volcano"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Leckie", 
      "firstName": "Robert"
    }, 
    "title": "Okinawa, The Last Battle of World War II"
  }, 
  {
    "series": "Pendragon Cycle 03", 
    "author": {
      "lastName": "Lawhead", 
      "firstName": "Stephen R."
    }, 
    "title": "Arthur"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Leonard", 
      "firstName": "Elmore"
    }, 
    "title": "Tishomingo Blues"
  }, 
  {
    "series": "Dexter 04", 
    "author": {
      "lastName": "Lindsay", 
      "firstName": "Jeff"
    }, 
    "title": "Dexter by Design"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Lindquist", 
      "firstName": "John Avjide"
    }, 
    "title": "Let the Right One In"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Larson", 
      "firstName": "Erik"
    }, 
    "title": "In the Garden of Beasts"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Lerner", 
      "firstName": "Betsy"
    }, 
    "title": "The Forest for the Trees"
  }, 
  {
    "series": "6", 
    "author": {
      "lastName": "Lewis", 
      "firstName": "C.S."
    }, 
    "title": "The Silver Chair"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Leonard", 
      "firstName": "Elmore"
    }, 
    "title": "Be Cool"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Liss", 
      "firstName": "David"
    }, 
    "title": "The Devil's Company"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Landstrom", 
      "firstName": "Sam"
    }, 
    "title": "MetaGame"
  }, 
  {
    "series": "Dexter 05", 
    "author": {
      "lastName": "Lindsay", 
      "firstName": "Jeff"
    }, 
    "title": "Dexter is Delicious"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Lander", 
      "firstName": "Christian"
    }, 
    "title": "Stuff White People Like"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Lamb", 
      "firstName": "Wally"
    }, 
    "title": "The Hour I First Believed"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Le Carre", 
      "firstName": "John"
    }, 
    "title": "Tinker, Tailor, Soldier, Spy"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Levitt", 
      "firstName": "Steven D."
    }, 
    "title": "Freakonomics"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Lehane", 
      "firstName": "Dennis"
    }, 
    "title": "Prayers for Rain"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Lehane", 
      "firstName": "Dennis"
    }, 
    "title": "Moonlight Mile"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Lowe", 
      "firstName": "Rob"
    }, 
    "title": "Stories I Only Tell My Friends"
  }, 
  {
    "series": "4", 
    "author": {
      "lastName": "Lewis", 
      "firstName": "C.S."
    }, 
    "title": "Prince Caspian"
  }, 
  {
    "series": "Pendragon Cycle 01", 
    "author": {
      "lastName": "Lawhead", 
      "firstName": "Stephen R."
    }, 
    "title": "Taliesin"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Lee", 
      "firstName": "Harper"
    }, 
    "title": "To Kill a Mockingbird"
  }, 
  {
    "series": "1", 
    "author": {
      "lastName": "Lewis", 
      "firstName": "C.S."
    }, 
    "title": "The Magician's Nephew"
  }, 
  {
    "series": "Harry Bosch 10", 
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "The Narrows"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Crichton", 
      "firstName": "Michael"
    }, 
    "title": "Congo"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "The Innocent"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Cooper", 
      "firstName": "James Fennimore"
    }, 
    "title": "The Last of the Mohicans"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Chernow", 
      "firstName": "Ron"
    }, 
    "title": "Washington"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Crane", 
      "firstName": "Stephen"
    }, 
    "title": "The Red Badge of Courage"
  }, 
  {
    "series": "Myron 03", 
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "Fade Away"
  }, 
  {
    "series": "Scarpetta 08", 
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "Unnatural.Exprosure"
  }, 
  {
    "series": "Saxon 01", 
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Bernard"
    }, 
    "title": "The Last Kingdom"
  }, 
  {
    "series": "Harry Bosch 08", 
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "City of Bones"
  }, 
  {
    "series": "Elvis Cole 06", 
    "author": {
      "lastName": "Crais", 
      "firstName": "Robert"
    }, 
    "title": "Sunset Express"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Cussler", 
      "firstName": "Clive"
    }, 
    "title": "Inca Gold"
  }, 
  {
    "series": "Jack Reacher 05", 
    "author": {
      "lastName": "Child", 
      "firstName": "Lee"
    }, 
    "title": "Echo Burning"
  }, 
  {
    "series": "Ender 01.5", 
    "author": {
      "lastName": "Card", 
      "firstName": "Orson Scott"
    }, 
    "title": "Ender in Exile"
  }, 
  {
    "series": "Elvis Cole 08", 
    "author": {
      "lastName": "Crais", 
      "firstName": "Robert"
    }, 
    "title": "L.A. Requiem"
  }, 
  {
    "series": "Myron 07", 
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "Darkest Fear"
  }, 
  {
    "series": "Grail Quest 02", 
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Bernard"
    }, 
    "title": "Vagabond"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Crichton", 
      "firstName": "Michael"
    }, 
    "title": "The Lost World"
  }, 
  {
    "series": "Saxon 05", 
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Bernard"
    }, 
    "title": "The Burning Land"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Clavell", 
      "firstName": "James"
    }, 
    "title": "Shogun"
  }, 
  {
    "series": "Myron 06", 
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "The Final Detail"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Colfer", 
      "firstName": "Eoin"
    }, 
    "title": "Artemis Fowl"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Crichton", 
      "firstName": "Michael"
    }, 
    "title": "Prey"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Carr", 
      "firstName": "Caleb"
    }, 
    "title": "The Alienist"
  }, 
  {
    "series": "The Dark is Rising 05", 
    "author": {
      "lastName": "Cooper", 
      "firstName": "Susan"
    }, 
    "title": "Silver on the Tree"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Chandler", 
      "firstName": "Raymond"
    }, 
    "title": "The Big Sleep"
  }, 
  {
    "series": "Ender 08", 
    "author": {
      "lastName": "Card", 
      "firstName": "Orson Scott"
    }, 
    "title": "Shadow of the Giant"
  }, 
  {
    "series": "The Hunger Games 01", 
    "author": {
      "lastName": "Collins", 
      "firstName": "Suzanne"
    }, 
    "title": "The Hunger Games"
  }, 
  {
    "series": "Jack Reacher 03", 
    "author": {
      "lastName": "Child", 
      "firstName": "Lee"
    }, 
    "title": "Tripwire"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Clancy", 
      "firstName": "Tom"
    }, 
    "title": "Rainbow Six"
  }, 
  {
    "series": "Mickey Haller 04", 
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "The Fifth Witness"
  }, 
  {
    "series": "Elvis Cole 11", 
    "author": {
      "lastName": "Crais", 
      "firstName": "Robert"
    }, 
    "title": "Chasing Darkness"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Crais", 
      "firstName": "Robert"
    }, 
    "title": "Demolition Angel"
  }, 
  {
    "series": "Saxon 03", 
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Bernard"
    }, 
    "title": "The Lords of the North"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Clancy", 
      "firstName": "Tom"
    }, 
    "title": "The Hunt for Red October"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Clarke", 
      "firstName": "Arthur C."
    }, 
    "title": "Childhood's End"
  }, 
  {
    "series": "Jack Reacher 14", 
    "author": {
      "lastName": "Child", 
      "firstName": "Lee"
    }, 
    "title": "61 Hours"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Chabon", 
      "firstName": "Michael"
    }, 
    "title": "The Amazing Adventures of Kavalier and Clay"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Chomsky", 
      "firstName": "Noam"
    }, 
    "title": "The Chomsky Reader"
  }, 
  {
    "series": "Grail Quest 03", 
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Bernard"
    }, 
    "title": "Heretic"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Conrad", 
      "firstName": "Joseph"
    }, 
    "title": "Heart Of Darkness"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Connolly", 
      "firstName": "John"
    }, 
    "title": "The Gates"
  }, 
  {
    "series": "Jack Reacher 10", 
    "author": {
      "lastName": "Child", 
      "firstName": "Lee"
    }, 
    "title": "The Hard Way"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "Play Dead"
  }, 
  {
    "series": "Harry Bosch 06", 
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "Angels Flight"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Chua", 
      "firstName": "Amy"
    }, 
    "title": "Battle Hymn of the Tiger Mother"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Crais", 
      "firstName": "Robert"
    }, 
    "title": "The Two Minute Rule"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Castaneda", 
      "firstName": "Carlos"
    }, 
    "title": "The Teachings of Don Juan"
  }, 
  {
    "series": "Scarpetta 05", 
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "The Body Farm"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Crais", 
      "firstName": "Robert"
    }, 
    "title": "Hostage"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "Live Wire"
  }, 
  {
    "series": "Saxon 02", 
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Bernard"
    }, 
    "title": "The Pale Horseman"
  }, 
  {
    "series": "Ender 07", 
    "author": {
      "lastName": "Card", 
      "firstName": "Orson Scott"
    }, 
    "title": "Shadow Puppets"
  }, 
  {
    "series": "Scarpetta 07", 
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "Cause of Death"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Carlin", 
      "firstName": "George"
    }, 
    "title": "Last Words"
  }, 
  {
    "series": "Jack Reacher 13", 
    "author": {
      "lastName": "Child", 
      "firstName": "Lee"
    }, 
    "title": "Gone Tomorrow"
  }, 
  {
    "series": "Scarpetta 16", 
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "Scarpetta"
  }, 
  {
    "series": "Ender 01", 
    "author": {
      "lastName": "Card", 
      "firstName": "Orson Scott"
    }, 
    "title": "Ender's Game"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "Caught"
  }, 
  {
    "series": "The Hunger Games 03", 
    "author": {
      "lastName": "Collins", 
      "firstName": "Suzanne"
    }, 
    "title": "Mockingjay"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Cather", 
      "firstName": "Willa"
    }, 
    "title": "My Antonia"
  }, 
  {
    "series": "Scarpetta 09", 
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "Point of Origin"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Cook", 
      "firstName": "Glen"
    }, 
    "title": "The Black Company"
  }, 
  {
    "series": "Jack Reacher 12", 
    "author": {
      "lastName": "Child", 
      "firstName": "Lee"
    }, 
    "title": "Nothing to Lose"
  }, 
  {
    "series": "Myron 02", 
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "Drop Shot"
  }, 
  {
    "series": "Scarpetta 14", 
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "Predator"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Clancy", 
      "firstName": "Tom"
    }, 
    "title": "Executive Orders"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Cheever", 
      "firstName": "John"
    }, 
    "title": "The Stories of John Cheever"
  }, 
  {
    "series": "The Dark is Rising 01", 
    "author": {
      "lastName": "Cooper", 
      "firstName": "Susan"
    }, 
    "title": "Over Sea, Under Stone"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Crichton", 
      "firstName": "Michael"
    }, 
    "title": "The Andromeda Strain"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Carlin", 
      "firstName": "George"
    }, 
    "title": "When Will Jesus Bring the Pork Chops"
  }, 
  {
    "series": "Warlord 01", 
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Bernard"
    }, 
    "title": "The Winter King"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Clarke", 
      "firstName": "Arthur C."
    }, 
    "title": "2001 A Space Odyssey"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "The Poet"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Card", 
      "firstName": "Orson Scott"
    }, 
    "title": "Seventh Son"
  }, 
  {
    "series": "Harry Bosch 02", 
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "The Black Ice"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Connolly", 
      "firstName": "John"
    }, 
    "title": "The Book Of Lost Things"
  }, 
  {
    "series": "Harry Bosch 13", 
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "The Overlook"
  }, 
  {
    "series": "Myron 01", 
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "Deal Breaker"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Crichton", 
      "firstName": "Michael"
    }, 
    "title": "Timeline"
  }, 
  {
    "series": "Mickey Haller 01", 
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "The Lincoln Lawyer"
  }, 
  {
    "series": "Harry Bosch 04", 
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "The Last Coyote"
  }, 
  {
    "series": "Scarpetta 13", 
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "Trace"
  }, 
  {
    "series": "Scarpetta 01", 
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "Postmortem"
  }, 
  {
    "series": "Elvis Cole 05", 
    "author": {
      "lastName": "Crais", 
      "firstName": "Robert"
    }, 
    "title": "Voodoo River"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "The Scarecrow"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Crichton", 
      "firstName": "Michael"
    }, 
    "title": "Next"
  }, 
  {
    "series": "Grail Quest 01", 
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Bernard"
    }, 
    "title": "The Archer's Tale"
  }, 
  {
    "series": "Elvis Cole 03", 
    "author": {
      "lastName": "Crais", 
      "firstName": "Robert"
    }, 
    "title": "Lullaby Town"
  }, 
  {
    "series": "Harry Bosch 14", 
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "9 Dragons"
  }, 
  {
    "series": "Ender 02", 
    "author": {
      "lastName": "Card", 
      "firstName": "Orson Scott"
    }, 
    "title": "Speaker for the Dead"
  }, 
  {
    "series": "Saxon 04", 
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Bernard"
    }, 
    "title": "Sword Song"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Cleave", 
      "firstName": "Chris"
    }, 
    "title": "Little Bee"
  }, 
  {
    "series": "Scarpetta 17", 
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "The Scarpetta Factor"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Castle", 
      "firstName": "Richard"
    }, 
    "title": "Heat Wave"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Carolla", 
      "firstName": "Adam"
    }, 
    "title": "In Fifty Years We'll All Be Chicks"
  }, 
  {
    "series": "Scarpetta 11", 
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "Last Precinct"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Christie", 
      "firstName": "Agatha"
    }, 
    "title": "And Then There Were None"
  }, 
  {
    "series": "Harry Bosch 07", 
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "A Darkness More Than Night"
  }, 
  {
    "series": "Joe Pike 01", 
    "author": {
      "lastName": "Crais", 
      "firstName": "Robert"
    }, 
    "title": "The Watchman"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Carnegie", 
      "firstName": "Dale"
    }, 
    "title": "How To Win Friends and Influence People"
  }, 
  {
    "series": "Jack Reacher 06", 
    "author": {
      "lastName": "Child", 
      "firstName": "Lee"
    }, 
    "title": "Without Fail"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Cross", 
      "firstName": "David"
    }, 
    "title": "I Drink for a Reason"
  }, 
  {
    "series": "The Dark is Rising 03", 
    "author": {
      "lastName": "Cooper", 
      "firstName": "Susan"
    }, 
    "title": "Greenwitch"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "The Woods"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Cullen", 
      "firstName": "Dave"
    }, 
    "title": "Columbine"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Cussler", 
      "firstName": "Clive"
    }, 
    "title": "Shock Wave"
  }, 
  {
    "series": "Myron 09", 
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "Long Lost"
  }, 
  {
    "series": "Jack Reacher 07", 
    "author": {
      "lastName": "Child", 
      "firstName": "Lee"
    }, 
    "title": "Persuader"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Carlin", 
      "firstName": "George"
    }, 
    "title": "Napalm and Silly Putty"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Crichton", 
      "firstName": "Michael"
    }, 
    "title": "Airframe"
  }, 
  {
    "series": "Myron 08", 
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "Promise Me"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "Hold Tight"
  }, 
  {
    "series": "Ender 03", 
    "author": {
      "lastName": "Card", 
      "firstName": "Orson Scott"
    }, 
    "title": "Xenocide"
  }, 
  {
    "series": "Jack Reacher 04", 
    "author": {
      "lastName": "Child", 
      "firstName": "Lee"
    }, 
    "title": "Running Blind"
  }, 
  {
    "series": "Mickey Haller 02", 
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "The Brass Verdict"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Crichton", 
      "firstName": "Michael"
    }, 
    "title": "Sphere"
  }, 
  {
    "series": "The Dark is Rising 02", 
    "author": {
      "lastName": "Cooper", 
      "firstName": "Susan"
    }, 
    "title": "The Dark is Rising"
  }, 
  {
    "series": "Scarpetta 02", 
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "Body of Evidence"
  }, 
  {
    "series": "Scarpetta 06", 
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "From Potters Field"
  }, 
  {
    "series": "Harry Bosch 01", 
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "The Black Echo"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Connolly", 
      "firstName": "John"
    }, 
    "title": "Every Dead Thing"
  }, 
  {
    "series": "Harry Bosch 11", 
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "The Closers"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "Void Moon"
  }, 
  {
    "series": "Jack Reacher 08", 
    "author": {
      "lastName": "Child", 
      "firstName": "Lee"
    }, 
    "title": "The Enemy"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Crichton", 
      "firstName": "Michael"
    }, 
    "title": "Pirate Latitudes"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Clancy", 
      "firstName": "Tom"
    }, 
    "title": "The Sum of All Fears"
  }, 
  {
    "series": "Scarpetta 15", 
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "Book of the Dead"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Clancy", 
      "firstName": "Tom"
    }, 
    "title": "Patriot Games"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Carlin", 
      "firstName": "George"
    }, 
    "title": "Brain Droppings"
  }, 
  {
    "series": "Myron 05", 
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "One False Move"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Colbert", 
      "firstName": "Stephen"
    }, 
    "title": "I Am America (And So Can You!)"
  }, 
  {
    "series": "Elvis Cole 01", 
    "author": {
      "lastName": "Crais", 
      "firstName": "Robert"
    }, 
    "title": "The Monkey's Raincoat"
  }, 
  {
    "series": "Jack Reacher 01", 
    "author": {
      "lastName": "Child", 
      "firstName": "Lee"
    }, 
    "title": "Killing Floor"
  }, 
  {
    "series": "Warlord 03", 
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Bernard"
    }, 
    "title": "Excalibur"
  }, 
  {
    "series": "Elvis Cole 02", 
    "author": {
      "lastName": "Crais", 
      "firstName": "Robert"
    }, 
    "title": "Stalking the Angel"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "", 
      "firstName": "Cracked.com"
    }, 
    "title": "You Might Be a Zombie and Other Bad News"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Carroll", 
      "firstName": "Lewis"
    }, 
    "title": "Alice's Adventures in Wonderland and Through the Looking-Glass"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "Blood Work"
  }, 
  {
    "series": "Ender 06", 
    "author": {
      "lastName": "Card", 
      "firstName": "Orson Scott"
    }, 
    "title": "Shadow of the Hegemon"
  }, 
  {
    "series": "Elvis Cole 07", 
    "author": {
      "lastName": "Crais", 
      "firstName": "Robert"
    }, 
    "title": "Indigo Slam"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Crichton", 
      "firstName": "Michael"
    }, 
    "title": "Eaters of the Dead"
  }, 
  {
    "series": "Ender 04", 
    "author": {
      "lastName": "Card", 
      "firstName": "Orson Scott"
    }, 
    "title": "Children of the Mind"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "Just One Look"
  }, 
  {
    "series": "Myron 04", 
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "Back Spin"
  }, 
  {
    "series": "The Dark is Rising 04", 
    "author": {
      "lastName": "Cooper", 
      "firstName": "Susan"
    }, 
    "title": "The Grey King"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Carver", 
      "firstName": "Raymond"
    }, 
    "title": "Where I'm Calling From"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Coelho", 
      "firstName": "Paulo"
    }, 
    "title": "The Alchemist"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Crichton", 
      "firstName": "Michael"
    }, 
    "title": "Disclosure"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Collins", 
      "firstName": "Wilkie"
    }, 
    "title": "The Woman in White"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Cash", 
      "firstName": "Johnny"
    }, 
    "title": "Cash, The Autobiography"
  }, 
  {
    "series": "Jack Reacher 02", 
    "author": {
      "lastName": "Child", 
      "firstName": "Lee"
    }, 
    "title": "Die Trying"
  }, 
  {
    "series": "Scarpetta 10", 
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "Black Notice"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Clancy", 
      "firstName": "Tom"
    }, 
    "title": "Clear and Present Danger"
  }, 
  {
    "series": "Harry Bosch 03", 
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "The Concrete Blonde"
  }, 
  {
    "series": "Ender 05", 
    "author": {
      "lastName": "Card", 
      "firstName": "Orson Scott"
    }, 
    "title": "Ender's Shadow"
  }, 
  {
    "series": "Jack Reacher 11", 
    "author": {
      "lastName": "Child", 
      "firstName": "Lee"
    }, 
    "title": "Bad Luck and Trouble"
  }, 
  {
    "series": "Harry Bosch 09", 
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "Lost Light"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "Gone for Good"
  }, 
  {
    "series": "The Hunger Games 02", 
    "author": {
      "lastName": "Collins", 
      "firstName": "Suzanne"
    }, 
    "title": "Catching Fire"
  }, 
  {
    "series": "Jack Reacher 09", 
    "author": {
      "lastName": "Child", 
      "firstName": "Lee"
    }, 
    "title": "One Shot"
  }, 
  {
    "series": "Scarpetta 03", 
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "All That Remains"
  }, 
  {
    "series": "Elvis Cole 04", 
    "author": {
      "lastName": "Crais", 
      "firstName": "Robert"
    }, 
    "title": "Free Fall"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Coleridge", 
      "firstName": "Samuel Taylor"
    }, 
    "title": "The Rime of the Ancient Mariner"
  }, 
  {
    "series": "Elvis Cole 10", 
    "author": {
      "lastName": "Crais", 
      "firstName": "Robert"
    }, 
    "title": "The Forgotten Man"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Crichton", 
      "firstName": "Michael"
    }, 
    "title": "Jurassic Park"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Christie", 
      "firstName": "Agatha"
    }, 
    "title": "Murder on the Orient Express"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Castle", 
      "firstName": "Richard"
    }, 
    "title": "Naked Heat"
  }, 
  {
    "series": "Joe Pike 02", 
    "author": {
      "lastName": "Crais", 
      "firstName": "Robert"
    }, 
    "title": "The First Rule"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "Tell No One"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "Chasing the Dime"
  }, 
  {
    "series": "Harry Bosch 12", 
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "Echo Park"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Chadwick", 
      "firstName": "Elizabeth"
    }, 
    "title": "The Greatest Knight"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Covey", 
      "firstName": "Stephen R."
    }, 
    "title": "Seven Habits of Highly Effective People"
  }, 
  {
    "series": "Scarpetta 18", 
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "Port Mortuary"
  }, 
  {
    "series": "Scarpetta 04", 
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "Cruel and Unusual"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Cronin", 
      "firstName": "Justin"
    }, 
    "title": "The Passage"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Crichton", 
      "firstName": "Michael"
    }, 
    "title": "State of Fear"
  }, 
  {
    "series": "Mickey Haller 03", 
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "The Reversal"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Bernard"
    }, 
    "title": "Azincourt"
  }, 
  {
    "series": "Warlord 02", 
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Bernard"
    }, 
    "title": "Enemy of God"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Clinton", 
      "firstName": "Bill"
    }, 
    "title": "My Life"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "No Second Chance"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Chekhov", 
      "firstName": "Anton"
    }, 
    "title": "Selected Stores of Anton Chekhov"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Cussler", 
      "firstName": "Clive"
    }, 
    "title": "Flood Tide"
  }, 
  {
    "series": "Jack Reacher 15", 
    "author": {
      "lastName": "Child", 
      "firstName": "Lee"
    }, 
    "title": "Worth Dying For.azw"
  }, 
  {
    "series": "Harry Bosch 05", 
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "Trunk Music"
  }, 
  {
    "series": "Scarpetta 12", 
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "Blow Fly"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Coetzee", 
      "firstName": "J.M."
    }, 
    "title": "Disgrace"
  }, 
  {
    "series": "Elvis Cole 09", 
    "author": {
      "lastName": "Crais", 
      "firstName": "Robert"
    }, 
    "title": "The Last Detective"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Jacques", 
      "firstName": "Brian"
    }, 
    "title": "Lord Brocktree"
  }, 
  {
    "series": "Wheel of Time 12", 
    "author": {
      "lastName": "Jordan", 
      "firstName": "Robert"
    }, 
    "title": "The Gathering Storm"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Jacobs", 
      "firstName": "A.J."
    }, 
    "title": "The Year of Living Biblically"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Jacques", 
      "firstName": "Brian"
    }, 
    "title": "Mariel of Redwall"
  }, 
  {
    "series": "Wheel of Time 08", 
    "author": {
      "lastName": "Jordan", 
      "firstName": "Robert"
    }, 
    "title": "The Path of Daggers"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Jacobsen", 
      "firstName": "Annie"
    }, 
    "title": "Area 51"
  }, 
  {
    "series": "Wheel of Time 07", 
    "author": {
      "lastName": "Jordan", 
      "firstName": "Robert"
    }, 
    "title": "A Crown of Swords"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Irving", 
      "firstName": "John"
    }, 
    "title": "Last Night in Twisted River"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Junger", 
      "firstName": "Alejandro"
    }, 
    "title": "Clean"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Jacques", 
      "firstName": "Brian"
    }, 
    "title": "Triss"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Jacques", 
      "firstName": "Brian"
    }, 
    "title": "The Pearls of Lutra"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Joyce", 
      "firstName": "James"
    }, 
    "title": "Dubliners"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Jacques", 
      "firstName": "Brian"
    }, 
    "title": "Marlfox"
  }, 
  {
    "series": "Wheel of Time 02", 
    "author": {
      "lastName": "Jordan", 
      "firstName": "Robert"
    }, 
    "title": "The Great Hunt"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "James", 
      "firstName": "Henry"
    }, 
    "title": "Daisy Miller and Other Stories"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Junger", 
      "firstName": "Sebastian"
    }, 
    "title": "War"
  }, 
  {
    "series": "Wheel of Time 09", 
    "author": {
      "lastName": "Jordan", 
      "firstName": "Robert"
    }, 
    "title": "Winter's Heart"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Jacques", 
      "firstName": "Brian"
    }, 
    "title": "Mossflower"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Jackson", 
      "firstName": "Shirley"
    }, 
    "title": "The Lottery"
  }, 
  {
    "series": "Wheel of Time 04", 
    "author": {
      "lastName": "Jordan", 
      "firstName": "Robert"
    }, 
    "title": "The Shadow Rising"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Jacques", 
      "firstName": "Brian"
    }, 
    "title": "Salamandastron"
  }, 
  {
    "series": "Wheel of Time 10", 
    "author": {
      "lastName": "Jordan", 
      "firstName": "Robert"
    }, 
    "title": "Crossroads of Twilight"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Jacques", 
      "firstName": "Brian"
    }, 
    "title": "The Taggerung"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Juster", 
      "firstName": "Norton"
    }, 
    "title": "The Phantom Tollbooth"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Irving", 
      "firstName": "Washington"
    }, 
    "title": "The Legend of Sleepy Hollow"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "", 
      "firstName": "Jay-Z"
    }, 
    "title": "Decoded"
  }, 
  {
    "series": "Wheel of Time 01", 
    "author": {
      "lastName": "Jordan", 
      "firstName": "Robert"
    }, 
    "title": "The Eye of the World"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Jeremy", 
      "firstName": "Ron"
    }, 
    "title": "The Hardest (Working) Man in Showbiz"
  }, 
  {
    "series": "Wheel of Time 06", 
    "author": {
      "lastName": "Jordan", 
      "firstName": "Robert"
    }, 
    "title": "The Fires of Heaven"
  }, 
  {
    "series": "Wheel of Time 05", 
    "author": {
      "lastName": "Jordan", 
      "firstName": "Robert"
    }, 
    "title": "Lord of Chaos"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Jacobs", 
      "firstName": "A.J."
    }, 
    "title": "The Know-It-All"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Jacques", 
      "firstName": "Brian"
    }, 
    "title": "Martin the Warrior"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Irving", 
      "firstName": "John"
    }, 
    "title": "A Prayer for Owen Meany"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Joyce", 
      "firstName": "James"
    }, 
    "title": "Ulysses"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Jacques", 
      "firstName": "Brian"
    }, 
    "title": "Redwall"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Jacques", 
      "firstName": "Brian"
    }, 
    "title": "The Outcast of Redwall"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Jacques", 
      "firstName": "Brian"
    }, 
    "title": "Mattimeo"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Jones", 
      "firstName": "Edward P."
    }, 
    "title": "The Known World"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Jensen", 
      "firstName": "Carsten"
    }, 
    "title": "We, the Drowned"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Judd", 
      "firstName": "Ashley"
    }, 
    "title": "All That is Bitter and Sweet"
  }, 
  {
    "series": "7- 7", 
    "author": {
      "lastName": "Jacques", 
      "firstName": "Brian"
    }, 
    "title": "The Bellmaker"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Ishiguro", 
      "firstName": "Kazuo"
    }, 
    "title": "Never Let Me Go"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Jacques", 
      "firstName": "Brian"
    }, 
    "title": "The Long Patrol"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "July", 
      "firstName": "Miranda"
    }, 
    "title": "No One Belongs Here More Than You"
  }, 
  {
    "series": "Wheel of Time 11", 
    "author": {
      "lastName": "Jordan", 
      "firstName": "Robert"
    }, 
    "title": "Knife of Dreams"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Junger", 
      "firstName": "Sebastian"
    }, 
    "title": "The Perfect Storm"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Jensen", 
      "firstName": "Derrick"
    }, 
    "title": "Endgame Vol. 1"
  }, 
  {
    "series": "Wheel of Time 03", 
    "author": {
      "lastName": "Jordan", 
      "firstName": "Robert"
    }, 
    "title": "The Dragon Reborn"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Jennings", 
      "firstName": "Gary"
    }, 
    "title": "Aztec"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Joyce", 
      "firstName": "James"
    }, 
    "title": "A Portrait of the Artist As a Young Man"
  }, 
  {
    "series": "Wheel of Time 00", 
    "author": {
      "lastName": "Jordan", 
      "firstName": "Robert"
    }, 
    "title": "New Spring"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Jacques", 
      "firstName": "Brian"
    }, 
    "title": "The Legend of Luke"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Misery"
  }, 
  {
    "series": "The Dark Tower 02", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Drawing of the Three"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Keyes", 
      "firstName": "Marian"
    }, 
    "title": "Watermelon"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Kinsella", 
      "firstName": "Sophie"
    }, 
    "title": "Can You Keep a Secret"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "The Face"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Eyes of the Dragon"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "UR"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Kinsella", 
      "firstName": "Sophie"
    }, 
    "title": "Shopaholic and Sister"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Talisman"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Keyes", 
      "firstName": "Marian"
    }, 
    "title": "Rachel's Holiday"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Velocity"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Rage"
  }, 
  {
    "series": "Fionavar 03", 
    "author": {
      "lastName": "Kay", 
      "firstName": "Guy Gavriel"
    }, 
    "title": "The Darkest Road"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Cujo"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "False Memory"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Firestarter"
  }, 
  {
    "series": "The Dark Tower 07", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Dark Tower"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Duma Key"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Four Past Midnight"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Your Heart Belongs to Me"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Pet Sematary"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Kingsolver", 
      "firstName": "Barbara"
    }, 
    "title": "The Poisonwood Bible"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Kay", 
      "firstName": "Guy Gavriel"
    }, 
    "title": "Tigana"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Dolores Claiborne"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Watchers"
  }, 
  {
    "series": "The Dark Tower 05", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Wolves of the Calla"
  }, 
  {
    "series": "Odd Thomas 03", 
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Brother Odd"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Insomnia"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Running Man"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Dark Half"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Krauss", 
      "firstName": "Nicole"
    }, 
    "title": "Great House"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Seize the Night"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Night Shift"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "From the Corner of His Eye"
  }, 
  {
    "series": "The Dark Tower 03", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Waste Lands"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Kaku", 
      "firstName": "Michio"
    }, 
    "title": "Physics of the Impossible"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Shining"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Desperation"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "The Taking"
  }, 
  {
    "series": "The Dark Tower 01", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Gunslinger"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Gren Mile"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Kafka", 
      "firstName": "Franz"
    }, 
    "title": "The Metamorphosis and Other Stories"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Hearts In Atlantis"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Krakauer", 
      "firstName": "Jon"
    }, 
    "title": "Where Men Win Glory"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Dreamcatcher"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Dead Zone"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Strangers"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Lisey's Story"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Tick Tock"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Krakauer", 
      "firstName": "Jon"
    }, 
    "title": "Into the Wild"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Kinsella", 
      "firstName": "Sophie"
    }, 
    "title": "Shopaholic Takes Manhattan"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Keyes", 
      "firstName": "Marian"
    }, 
    "title": "Sushi for Beginners"
  }, 
  {
    "series": "Odd Thomas 04", 
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Odd Hours"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Thinner"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Kerouac", 
      "firstName": "Jack"
    }, 
    "title": "On The Road"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Kerouac", 
      "firstName": "Jack"
    }, 
    "title": "The Dharma Bums"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Relentless"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "From a Buick 8"
  }, 
  {
    "series": "The Dark Tower 06", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Song of Susannah"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Long Walk"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Keyes", 
      "firstName": "Marian"
    }, 
    "title": "The Other Side of the Story"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Kinsella", 
      "firstName": "Sophie"
    }, 
    "title": "Remember Me"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Colorado Kid"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Regulators"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "One Door Away From Heaven"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Girl Who Loved Tom Gordon"
  }, 
  {
    "series": "Fionavar 02", 
    "author": {
      "lastName": "Kay", 
      "firstName": "Guy Gavriel"
    }, 
    "title": "The Wandering Fire"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "The Darkest Evening of the Year"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Mr. Murder"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Fear Nothing"
  }, 
  {
    "series": "Odd Thomas 02", 
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Forever Odd"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Full Dark, No Stars"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Kinsella", 
      "firstName": "Sophie"
    }, 
    "title": "Confessions of a Shopaholic"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Just After Sunset"
  }, 
  {
    "series": "Odd Thomas 01", 
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Odd Thomas"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Demon Seed"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Klein", 
      "firstName": "Naomi"
    }, 
    "title": "The Shock Doctrine"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Stand"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Kesey", 
      "firstName": "Ken"
    }, 
    "title": "One Flew Over the Cuckoo's Nest"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Sole Survivor"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Carrie"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "The Door to December"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Kershaw", 
      "firstName": "Ian"
    }, 
    "title": "Hitler"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Intensity"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Krakauer", 
      "firstName": "Jon"
    }, 
    "title": "Under the Banner of Heaven"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Nightmares and Dreamscapes"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Kay", 
      "firstName": "Guy Gavriel"
    }, 
    "title": "The Lions of Al-Rassan"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Kinsella", 
      "firstName": "Sophie"
    }, 
    "title": "Shopaholic and Baby"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Everything's Eventual"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Kafka", 
      "firstName": "Franz"
    }, 
    "title": "The Trial"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Cycle of the Werewolf"
  }, 
  {
    "series": "The Dark Tower 04", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Wizard and Glass"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Different Seasons"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Cell"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Kingsbury", 
      "firstName": "Karen"
    }, 
    "title": "Unlocked"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Under the Dome"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Roadwork"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Tommyknockers"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "The Husband"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Keyes", 
      "firstName": "Marian"
    }, 
    "title": "Last Chance Saloon"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Christine"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Klosterman", 
      "firstName": "Chuck"
    }, 
    "title": "Eating the Dinosaur"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Skeleton Crew"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Kroese", 
      "firstName": "Robert"
    }, 
    "title": "Mercury Falls"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Bag of Bones"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dead"
    }, 
    "title": "By the Light of the Moon"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Rose Madder"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Kinsella", 
      "firstName": "Sophie"
    }, 
    "title": "Shopaholic Ties the Knot"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Keyes", 
      "firstName": "Marian"
    }, 
    "title": "Lucy Sullivan is Getting Married"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Kiyosaki", 
      "firstName": "Robert"
    }, 
    "title": "Rich Dad, Poor Dad"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Midnight"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Black House"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Salem's Lot"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Keyes", 
      "firstName": "Marian"
    }, 
    "title": "Anybody Out There"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "It"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Kostova", 
      "firstName": "Elizabeth"
    }, 
    "title": "The Historian"
  }, 
  {
    "series": "Fionavar 01", 
    "author": {
      "lastName": "Kay", 
      "firstName": "Guy Gavriel"
    }, 
    "title": "The Summer Tree"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Gerald's Game"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Orwell", 
      "firstName": "George"
    }, 
    "title": "1984"
  }, 
  {
    "series": "Discworld 08", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Guards! Guards!"
  }, 
  {
    "series": "Spenser 33", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "School Days"
  }, 
  {
    "series": "Aubrey Maturin 19", 
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "The Hundred Days"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Puzo", 
      "firstName": "Mario"
    }, 
    "title": "The Godfather"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Palahniuk", 
      "firstName": "Chuck"
    }, 
    "title": "Fight Club"
  }, 
  {
    "series": "Spenser 11", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Valediction"
  }, 
  {
    "series": "Pendergast 01", 
    "author": {
      "lastName": "Preston", 
      "firstName": "Douglas"
    }, 
    "title": "Relic"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Paul", 
      "firstName": "Ron"
    }, 
    "title": "Liberty Defined"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "Suzanne's Diary for Nicholas"
  }, 
  {
    "series": "Discworld 18", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Maskerade"
  }, 
  {
    "series": "Spenser 29", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Widow's Walk"
  }, 
  {
    "series": "Stone 08", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Night and Day"
  }, 
  {
    "series": "Aubrey Maturin 04", 
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "The Mauritius Command"
  }, 
  {
    "series": "Discworld 09", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Eric"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "London Bridges"
  }, 
  {
    "series": "Stone 05", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Sea Change"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Priest", 
      "firstName": "Cherie"
    }, 
    "title": "Boneshaker"
  }, 
  {
    "series": "Aubrey Maturin 12", 
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "The Letter Of Marque"
  }, 
  {
    "series": "Discworld 25", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "The Truth"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Paul", 
      "firstName": "Ron"
    }, 
    "title": "The Revolution"
  }, 
  {
    "series": "Spenser 09", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Ceremony"
  }, 
  {
    "series": "Discworld 19", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Feet of Clay"
  }, 
  {
    "series": "Spenser 08", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "A Savage Place"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "Hide and Seek"
  }, 
  {
    "series": "Aubrey Maturin 11", 
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "The Reverse Of The Medal"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Portis", 
      "firstName": "Charles"
    }, 
    "title": "True Grit"
  }, 
  {
    "series": "Stone 06", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "High Profile"
  }, 
  {
    "series": "Stone 01", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Night Passage"
  }, 
  {
    "series": "Discworld 06", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Wyrd Sisters"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Preston", 
      "firstName": "Douglas"
    }, 
    "title": "Mount Dragon"
  }, 
  {
    "series": "Aubrey Maturin 18", 
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "The Yellow Admiral"
  }, 
  {
    "series": "Aubrey Maturin 06", 
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "The Fortune of War"
  }, 
  {
    "series": "Discworld 31", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Monstrous Regiment"
  }, 
  {
    "series": "Discworld 02", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "The Light Fantastic"
  }, 
  {
    "series": "Spenser 37", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "The Professional"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Palahniuk", 
      "firstName": "Chuck"
    }, 
    "title": "Rant"
  }, 
  {
    "series": "Discworld 38", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "I Shall Wear Midnight"
  }, 
  {
    "series": "Spenser 25", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Sudden Mischief"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Pollan", 
      "firstName": "Michael"
    }, 
    "title": "The Omnivore's Dilemma"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "Pop Goes the Weasel"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Orwell", 
      "firstName": "George"
    }, 
    "title": "Animal Farm"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Potzsch", 
      "firstName": "Oliver"
    }, 
    "title": "The Hangman's Daughter"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "Along Came a Spider"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Palahniuk", 
      "firstName": "Chuck"
    }, 
    "title": "Pygmy"
  }, 
  {
    "series": "Spenser 06", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Looking for Rachel Wallace"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "Cradle and All"
  }, 
  {
    "series": "Aubrey Maturin 07", 
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "The Surgeon's Mate"
  }, 
  {
    "series": "Spenser 20", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Paper Doll"
  }, 
  {
    "series": "His Dark Materials 03", 
    "author": {
      "lastName": "Pullman", 
      "firstName": "Philip"
    }, 
    "title": "The Amber Spyglass"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Palahniuk", 
      "firstName": "Chuck"
    }, 
    "title": "Lullaby"
  }, 
  {
    "series": "Discworld 17", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Interesting Times"
  }, 
  {
    "series": "Discworld 28", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "The Amazing Maurice and His Educated Rodents"
  }, 
  {
    "series": "Gideon Crew 01", 
    "author": {
      "lastName": "Preston", 
      "firstName": "Douglas"
    }, 
    "title": "Gideon's Sword"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Palahniuk", 
      "firstName": "Chuck"
    }, 
    "title": "Invisible Monsters"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Obama", 
      "firstName": "Barack"
    }, 
    "title": "The Audacity of Hope"
  }, 
  {
    "series": "Discworld 23", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Carpe Jugulum"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Palahniuk", 
      "firstName": "Chuck"
    }, 
    "title": "Haunted"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Penny", 
      "firstName": "Louise"
    }, 
    "title": "Still Life"
  }, 
  {
    "series": "Discworld 32", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "A Hat Full Of Sky"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Preston", 
      "firstName": "Douglas"
    }, 
    "title": "Thunderhead"
  }, 
  {
    "series": "Stone 04", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Stone Cold"
  }, 
  {
    "series": "Stone 03", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Death in Paradise"
  }, 
  {
    "series": "Discworld 24", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "The Fifth Elephant"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "Four Blind Mice"
  }, 
  {
    "series": "Aubrey Maturin 02", 
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "Post Captain"
  }, 
  {
    "series": "Aubrey Maturin 14", 
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "The Nutmeg Of Consolation"
  }, 
  {
    "series": "Stone 07", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Stranger in Paradise"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Plath", 
      "firstName": "Sylvia"
    }, 
    "title": "The Bell Jar"
  }, 
  {
    "series": "Spenser 02", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "God Save the Child"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Pynchon", 
      "firstName": "Thomas"
    }, 
    "title": "Gravity's Rainbow"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Palin", 
      "firstName": "Sarah"
    }, 
    "title": "Going Rogue"
  }, 
  {
    "series": "Discworld 27", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "The Last Hero"
  }, 
  {
    "series": "Spenser 17", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Stardust"
  }, 
  {
    "series": "Aubrey Maturin 20", 
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "Blue at the Mizzen"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "Violets Are Blue"
  }, 
  {
    "series": "Spenser 23", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Chance"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Palahniuk", 
      "firstName": "Chuck"
    }, 
    "title": "Diary"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Pynchon", 
      "firstName": "Thomas"
    }, 
    "title": "The Crying of Lot 49"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Palahniuk", 
      "firstName": "Chuck"
    }, 
    "title": "Survivor"
  }, 
  {
    "series": "Aubrey Maturin 09", 
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "Treason's Harbour"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Paine", 
      "firstName": "Thomas"
    }, 
    "title": "Common Sense and The Rights of Man"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "", 
      "firstName": "Plato"
    }, 
    "title": "The Republic"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "O'Connor", 
      "firstName": "Flannery"
    }, 
    "title": "Everything That Rises Must Converge"
  }, 
  {
    "series": "The Inheritance Cycle 01", 
    "author": {
      "lastName": "Paolini", 
      "firstName": "Christopher"
    }, 
    "title": "Eragon"
  }, 
  {
    "series": "Spenser 26", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Hush Money"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Palahniuk", 
      "firstName": "Chuck"
    }, 
    "title": "Choke"
  }, 
  {
    "series": "Spenser 19", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Double Deuce"
  }, 
  {
    "series": "Aubrey Maturin 10", 
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "The Far Side of the World"
  }, 
  {
    "series": "Spenser 03", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Mortal Stakes"
  }, 
  {
    "series": "Spenser 16", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Playmates"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "Jack and Jill"
  }, 
  {
    "series": "Discworld 04", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Mort"
  }, 
  {
    "series": "Aubrey Maturin 16", 
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "The Wine-Dark Sea"
  }, 
  {
    "series": "Pendergast 10", 
    "author": {
      "lastName": "Preston", 
      "firstName": "Douglas"
    }, 
    "title": "Fever Dream"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "Mary, Mary"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Pressfield", 
      "firstName": "Steven"
    }, 
    "title": "Gates of Fire"
  }, 
  {
    "series": "Spenser 32", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Cold Service"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "Cat and Mouse"
  }, 
  {
    "series": "Pendergast 06", 
    "author": {
      "lastName": "Preston", 
      "firstName": "Douglas"
    }, 
    "title": "Dance of Death"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Proust", 
      "firstName": "Marcel"
    }, 
    "title": "Swann's Way"
  }, 
  {
    "series": "Discworld 20", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Hogfather"
  }, 
  {
    "series": "Pendergast 08", 
    "author": {
      "lastName": "Preston", 
      "firstName": "Douglas"
    }, 
    "title": "The Wheel of Darkness"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Poe", 
      "firstName": "Edgar Allan"
    }, 
    "title": "Essential Tales and Poems"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Palahniuk", 
      "firstName": "Chuck"
    }, 
    "title": "Tell-All"
  }, 
  {
    "series": "Stone 09", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Split Image"
  }, 
  {
    "series": "Pendergast 02", 
    "author": {
      "lastName": "Preston", 
      "firstName": "Douglas"
    }, 
    "title": "Reliquary"
  }, 
  {
    "series": "Spenser 15", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Crimson Joy"
  }, 
  {
    "series": "Pendergast 09", 
    "author": {
      "lastName": "Preston", 
      "firstName": "Douglas"
    }, 
    "title": "Cemetery Dance"
  }, 
  {
    "series": "Spenser 34", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Hundred Dollar Baby"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Preston", 
      "firstName": "Richard"
    }, 
    "title": "The Cobra Event"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Palahniuk", 
      "firstName": "Chuck"
    }, 
    "title": "Fugitives and Refugees"
  }, 
  {
    "series": "Discworld 22", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "The Last Continent"
  }, 
  {
    "series": "Spenser 27", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Hugger Mugger"
  }, 
  {
    "series": "Spenser 10", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "The Widening Gyre"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "Roses Are Red"
  }, 
  {
    "series": "His Dark Materials 02", 
    "author": {
      "lastName": "Pullman", 
      "firstName": "Philip"
    }, 
    "title": "The Subtle Knife"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Patchett", 
      "firstName": "Ann"
    }, 
    "title": "Bel Canto"
  }, 
  {
    "series": "Discworld 07", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Pyramids"
  }, 
  {
    "series": "Discworld 36", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Making Money"
  }, 
  {
    "series": "Aubrey Maturin 13", 
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "The Thirteen Gun Salute"
  }, 
  {
    "series": "Discworld 33", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Going Postal"
  }, 
  {
    "series": "His Dark Materials 01", 
    "author": {
      "lastName": "Pullman", 
      "firstName": "Philip"
    }, 
    "title": "The Golden Compass"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Pelecanos", 
      "firstName": "George"
    }, 
    "title": "Drama City"
  }, 
  {
    "series": "Stone 02", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Trouble in Paradise"
  }, 
  {
    "series": "Discworld 16", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Soul Music"
  }, 
  {
    "series": "Aubrey Maturin 08", 
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "The Ionian Mission"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Pollan", 
      "firstName": "Michael"
    }, 
    "title": "The Botany of Desire"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Perlstein", 
      "firstName": "Rick"
    }, 
    "title": "Nixonland"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "3rd Degree"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "O'Connor", 
      "firstName": "Flannery"
    }, 
    "title": "Wise Blood"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Pirsig", 
      "firstName": "Robert M."
    }, 
    "title": "Zen and the Art of Motorcycle Maintenance"
  }, 
  {
    "series": "Pendergast 03", 
    "author": {
      "lastName": "Preston", 
      "firstName": "Douglas"
    }, 
    "title": "The Cabinent of Curiosities"
  }, 
  {
    "series": "Pendergast 07", 
    "author": {
      "lastName": "Preston", 
      "firstName": "Douglas"
    }, 
    "title": "The Book of the Dead"
  }, 
  {
    "series": "Spenser 18", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Pastime"
  }, 
  {
    "series": "Spenser 36", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Rough Weather"
  }, 
  {
    "series": "Discworld 01", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "The Colour of Magic"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Paul", 
      "firstName": "Ron"
    }, 
    "title": "End the Fed"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Osbourne", 
      "firstName": "Ozzy"
    }, 
    "title": "I Am Ozzy"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "1st to Die"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Palahniuk", 
      "firstName": "Chuck"
    }, 
    "title": "Snuff"
  }, 
  {
    "series": "Spenser 01", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "The Godwulf Manuscript"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Picoult", 
      "firstName": "Jodi"
    }, 
    "title": "The Pact"
  }, 
  {
    "series": "Pendergast 05", 
    "author": {
      "lastName": "Preston", 
      "firstName": "Douglas"
    }, 
    "title": "Brimstone"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "Witch and Wizard"
  }, 
  {
    "series": "Discworld 15", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Men at Arms"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "Beach Road"
  }, 
  {
    "series": "Discworld 35", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Wintersmith"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "The Beach House"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Prose", 
      "firstName": "Francine"
    }, 
    "title": "Reading Like a Writer"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "O'Neill", 
      "firstName": "Joseph"
    }, 
    "title": "Netherland"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Preston", 
      "firstName": "Douglas"
    }, 
    "title": "The Ice Limit"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Pollan", 
      "firstName": "Michael"
    }, 
    "title": "In Defense of Food"
  }, 
  {
    "series": "Aubrey Maturin 03", 
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "H.M.S. Surprise"
  }, 
  {
    "series": "Discworld 12", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Witches Abroad"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "The Lake House"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Pausch", 
      "firstName": "Randy"
    }, 
    "title": "The Last Lecture"
  }, 
  {
    "series": "Discworld 05", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Sourcery"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Picoult", 
      "firstName": "Jodi"
    }, 
    "title": "Nineteen Minutes"
  }, 
  {
    "series": "Discworld 30", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "The Wee Free Men"
  }, 
  {
    "series": "Discworld 34", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Thud!"
  }, 
  {
    "series": "Discworld 21", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Jingo"
  }, 
  {
    "series": "Aubrey Maturin 01", 
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "Master and Commander"
  }, 
  {
    "series": "Spenser 22", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Thin Air"
  }, 
  {
    "series": "Discworld 14", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Lords and Ladies"
  }, 
  {
    "series": "Spenser 21", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Walking Shadow"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "2nd Chance"
  }, 
  {
    "series": "Discworld 26", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Thief of Time"
  }, 
  {
    "series": "Spenser 04", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Promised Land"
  }, 
  {
    "series": "The Inheritance Cycle 03", 
    "author": {
      "lastName": "Paolini", 
      "firstName": "Christopher"
    }, 
    "title": "Brisingr"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Picoult", 
      "firstName": "Jodi"
    }, 
    "title": "My Sister's Keeper"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Obreht", 
      "firstName": "Tea"
    }, 
    "title": "The Tiger's Wife"
  }, 
  {
    "series": "Spenser 28", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Potshot"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Preston", 
      "firstName": "Richard"
    }, 
    "title": "The Hot Zone"
  }, 
  {
    "series": "Spenser 07", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Early Autumn"
  }, 
  {
    "series": "Spenser 14", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Pale Kings and Princes"
  }, 
  {
    "series": "Aubrey Maturin 05", 
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "Desolation Island"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Pierre", 
      "firstName": "DBC"
    }, 
    "title": "Vernon God Little"
  }, 
  {
    "series": "Spenser 35", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Now and Then"
  }, 
  {
    "series": "Discworld 10", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Moving Pictures"
  }, 
  {
    "series": "Discworld 03", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Equal Rites"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "Kiss the Girls"
  }, 
  {
    "series": "The Inheritance Cycle 02", 
    "author": {
      "lastName": "Paolini", 
      "firstName": "Christopher"
    }, 
    "title": "Eldest"
  }, 
  {
    "series": "Spenser 12", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "A Catskill Eagle"
  }, 
  {
    "series": "Spenser 38", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Painted Ladies"
  }, 
  {
    "series": "Spenser 05", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "The Judas Goat"
  }, 
  {
    "series": "Discworld 11", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Reaper Man"
  }, 
  {
    "series": "Discworld 37", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Unseen Academicals"
  }, 
  {
    "series": "Aubrey Maturin 15", 
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "Clarissa Oakes"
  }, 
  {
    "series": "Spenser 31", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Bad Business"
  }, 
  {
    "series": "Aubrey Maturin 17", 
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "The Commodore"
  }, 
  {
    "series": "Discworld 29", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Night Watch"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "The Big Bad Wolf"
  }, 
  {
    "series": "Pendergast 04", 
    "author": {
      "lastName": "Preston", 
      "firstName": "Douglas"
    }, 
    "title": "Still Life With Crows"
  }, 
  {
    "series": "Spenser 30", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Back Story"
  }, 
  {
    "series": "Spenser 13", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Taming a Sea Horse"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Percy", 
      "firstName": "Walker"
    }, 
    "title": "Lost in the Cosmos"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "When the Wind Blows"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "Cross"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "Judge and Jury"
  }, 
  {
    "series": "Discworld 13", 
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Small Gods"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Pelecanos", 
      "firstName": "George"
    }, 
    "title": "Shame the Devil"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Pynchon", 
      "firstName": "Thomas"
    }, 
    "title": "V"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Oswalt", 
      "firstName": "Patton"
    }, 
    "title": "Zombie Spaceship Wasteland"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Preston", 
      "firstName": "Douglas"
    }, 
    "title": "Riptide"
  }, 
  {
    "series": "Spenser 24", 
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Small Vices"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hawking", 
      "firstName": "Stephen"
    }, 
    "title": "The Grand Design"
  }, 
  {
    "series": "Rachel Morgan 05", 
    "author": {
      "lastName": "Harrison", 
      "firstName": "Kim"
    }, 
    "title": "For a Few Demons More"
  }, 
  {
    "series": "The Farseer Trilogy 02", 
    "author": {
      "lastName": "Hobb", 
      "firstName": "Robin"
    }, 
    "title": "Royal Assassin"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Harkness", 
      "firstName": "Deborah"
    }, 
    "title": "A Discovery of Witches"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hitchens", 
      "firstName": "Christopher"
    }, 
    "title": "Hitch-22"
  }, 
  {
    "series": "Sookie Stackhouse 11", 
    "author": {
      "lastName": "Harris", 
      "firstName": "Charlaine"
    }, 
    "title": "Dead Reckoning"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hiaasen", 
      "firstName": "Carl"
    }, 
    "title": "Double Whammy"
  }, 
  {
    "series": "Anita Blake 03", 
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Circus of the Damned"
  }, 
  {
    "series": "Anita Blake 18", 
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Flirt"
  }, 
  {
    "series": "Rachel Morgan 01", 
    "author": {
      "lastName": "Harrison", 
      "firstName": "Kim"
    }, 
    "title": "Dead Witch Walking"
  }, 
  {
    "series": "Bob Lee Swagger 01", 
    "author": {
      "lastName": "Hunter", 
      "firstName": "Stephen"
    }, 
    "title": "Point Of Impact"
  }, 
  {
    "series": "Meredith Gentry 02", 
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "A Caress of Twilight"
  }, 
  {
    "series": "Hannibal 02", 
    "author": {
      "lastName": "Harris", 
      "firstName": "Thomas"
    }, 
    "title": "The Silence of the Lambs"
  }, 
  {
    "series": "Rachel Morgan 02", 
    "author": {
      "lastName": "Harrison", 
      "firstName": "Kim"
    }, 
    "title": "The Good, The Bad, and the Undead"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Handler", 
      "firstName": "Chelsea"
    }, 
    "title": "Lies That Chelsea Handler Told Me"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Heller", 
      "firstName": "Joseph"
    }, 
    "title": "Catch-22"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hosseini", 
      "firstName": "Khaled"
    }, 
    "title": "A Thousand Splendid Suns"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "", 
      "firstName": "Homer"
    }, 
    "title": "The Odyssey"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hemingway", 
      "firstName": "Ernest"
    }, 
    "title": "A Farewell to Arms"
  }, 
  {
    "series": "Anita Blake 14", 
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Danse Macabre"
  }, 
  {
    "series": "Anita Blake 04", 
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "The Lunatic Cafe"
  }, 
  {
    "series": "Sookie Stackhouse 08", 
    "author": {
      "lastName": "Harris", 
      "firstName": "Charlaine"
    }, 
    "title": "From Dead to Worse"
  }, 
  {
    "series": "Meredith Gentry 04", 
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "A Stroke of Midnight"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hiaasen", 
      "firstName": "Carl"
    }, 
    "title": "Basket Case"
  }, 
  {
    "series": "Henry Thompson 02", 
    "author": {
      "lastName": "Huston", 
      "firstName": "Charlie"
    }, 
    "title": "Six Bad Things"
  }, 
  {
    "series": "Sookie Stackhouse 03", 
    "author": {
      "lastName": "Harris", 
      "firstName": "Charlaine"
    }, 
    "title": "Club Dead"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hitchens", 
      "firstName": "Christopher"
    }, 
    "title": "The Portable Atheist"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Handler", 
      "firstName": "Chelsea"
    }, 
    "title": "My Horizontal Life, A Collection of One Night Stands"
  }, 
  {
    "series": "Anita Blake 12", 
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Incubus Dreams"
  }, 
  {
    "series": "Anita Blake 09", 
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Obsidian Butterfly"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hiaasen", 
      "firstName": "Carl"
    }, 
    "title": "Stormy Weather"
  }, 
  {
    "series": "Sookie Stackhouse 05", 
    "author": {
      "lastName": "Harris", 
      "firstName": "Charlaine"
    }, 
    "title": "Dead as a Doornail"
  }, 
  {
    "series": "Rachel Morgan 07", 
    "author": {
      "lastName": "Harrison", 
      "firstName": "Kim"
    }, 
    "title": "White Witch Black Curse"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Haley", 
      "firstName": "Alex"
    }, 
    "title": "Roots"
  }, 
  {
    "series": "Dune 06", 
    "author": {
      "lastName": "Herbert", 
      "firstName": "Frank"
    }, 
    "title": "Chapterhouse Dune"
  }, 
  {
    "series": "Anita Blake 11", 
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Cerulean Sins"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hiaasen", 
      "firstName": "Carl"
    }, 
    "title": "Skinny Dip"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hirsi Ali", 
      "firstName": "Ayaan"
    }, 
    "title": "Infidel"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hosseini", 
      "firstName": "Khaled"
    }, 
    "title": "The Kite Runner"
  }, 
  {
    "series": "Henry Thompson 03", 
    "author": {
      "lastName": "Huston", 
      "firstName": "Charlie"
    }, 
    "title": "A Dangerous Man"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Halpern", 
      "firstName": "Justin"
    }, 
    "title": "Shit My Dad Says"
  }, 
  {
    "series": "Rain Wilds Chronicles 02", 
    "author": {
      "lastName": "Hobb", 
      "firstName": "Robin"
    }, 
    "title": "Dragon Haven"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hemingway", 
      "firstName": "Ernest"
    }, 
    "title": "A Moveable Feast"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Harris", 
      "firstName": "Sam"
    }, 
    "title": "The Moral Landscape"
  }, 
  {
    "series": "The Farseer Trilogy 01", 
    "author": {
      "lastName": "Hobb", 
      "firstName": "Robin"
    }, 
    "title": "Assassin's Apprentice"
  }, 
  {
    "series": "Sookie Stackhouse 09", 
    "author": {
      "lastName": "Harris", 
      "firstName": "Charlaine"
    }, 
    "title": "Dead and Gone"
  }, 
  {
    "series": "The Liveship Traders 02", 
    "author": {
      "lastName": "Hobb", 
      "firstName": "Robin"
    }, 
    "title": "Mad Ship"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hinton", 
      "firstName": "S.E."
    }, 
    "title": "The Outsiders"
  }, 
  {
    "series": "Anita Blake 07", 
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Burnt Offerings"
  }, 
  {
    "series": "The Liveship Traders 03", 
    "author": {
      "lastName": "Hobb", 
      "firstName": "Robin"
    }, 
    "title": "Ship of Destiny"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hill", 
      "firstName": "Joe"
    }, 
    "title": "Heart-Shaped Box"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Huffington", 
      "firstName": "Arianna"
    }, 
    "title": "Third World America"
  }, 
  {
    "series": "Sookie Stackhouse 10", 
    "author": {
      "lastName": "Harris", 
      "firstName": "Charlaine"
    }, 
    "title": "Dead in the Family"
  }, 
  {
    "series": "Anita Blake 13", 
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Micah"
  }, 
  {
    "series": "Anita Blake 17", 
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Skin Trade"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hawking", 
      "firstName": "Stephen"
    }, 
    "title": "A Brief History of Time"
  }, 
  {
    "series": "Hannibal 03", 
    "author": {
      "lastName": "Harris", 
      "firstName": "Thomas"
    }, 
    "title": "Hannibal"
  }, 
  {
    "series": "Anita Blake 10", 
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Narcissus in Chains"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hedges", 
      "firstName": "Chris"
    }, 
    "title": "Death of the Liberal Class"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Huston", 
      "firstName": "Charlie"
    }, 
    "title": "The Mystic Arts of Erasing All Signs of Death"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hawthorne", 
      "firstName": "Nathaniel"
    }, 
    "title": "The Scarlet Letter"
  }, 
  {
    "series": "Joe Pitt 03", 
    "author": {
      "lastName": "Huston", 
      "firstName": "Charlie"
    }, 
    "title": "Half the Blood of Brooklyn"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hardy", 
      "firstName": "Thomas"
    }, 
    "title": "Tess of the D'Urbervilles"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Huston", 
      "firstName": "Charlie"
    }, 
    "title": "The Shotgun Rule"
  }, 
  {
    "series": "Anita Blake 06", 
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "The Killing Dance"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Harris", 
      "firstName": "Robert"
    }, 
    "title": "Fatherland"
  }, 
  {
    "series": "The Tawny Man 02", 
    "author": {
      "lastName": "Hobb", 
      "firstName": "Robin"
    }, 
    "title": "Golden Fool"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hagar", 
      "firstName": "Sammy"
    }, 
    "title": "Red"
  }, 
  {
    "series": "Meredith Gentry 06", 
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "A Lick of Frost"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Handler", 
      "firstName": "Chelsea"
    }, 
    "title": "Are You There, Vodka. It's Me, Chelsea"
  }, 
  {
    "series": "Dune 02", 
    "author": {
      "lastName": "Herbert", 
      "firstName": "Frank"
    }, 
    "title": "Dune Messiah"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Heather", 
      "firstName": "Peter"
    }, 
    "title": "The Fall of the Roman Empire"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hornby", 
      "firstName": "Nick"
    }, 
    "title": "Fever Pitch"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Haldeman", 
      "firstName": "Joe"
    }, 
    "title": "The Forever War"
  }, 
  {
    "series": "Sookie Stackhouse 07", 
    "author": {
      "lastName": "Harris", 
      "firstName": "Charlaine"
    }, 
    "title": "All Together Dead"
  }, 
  {
    "series": "Rachel Morgan 03", 
    "author": {
      "lastName": "Harrison", 
      "firstName": "Kim"
    }, 
    "title": "Every Which Way But Dead"
  }, 
  {
    "series": "Rachel Morgan 08", 
    "author": {
      "lastName": "Harrison", 
      "firstName": "Kim"
    }, 
    "title": "Black Magic Sanction"
  }, 
  {
    "series": "Joe Pitt 05", 
    "author": {
      "lastName": "Huston", 
      "firstName": "Charlie"
    }, 
    "title": "My Dead Body"
  }, 
  {
    "series": "Anita Blake 02", 
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "The Laughing Corpse"
  }, 
  {
    "series": "Dune 01", 
    "author": {
      "lastName": "Herbert", 
      "firstName": "Frank"
    }, 
    "title": "Dune"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Huston", 
      "firstName": "Charlie"
    }, 
    "title": "Sleepless"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hemingway", 
      "firstName": "Ernest"
    }, 
    "title": "The Old Man and the Sea"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hill", 
      "firstName": "Joe"
    }, 
    "title": "Horns"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hillenbrand", 
      "firstName": "Laura"
    }, 
    "title": "Unbroken, A World War II Story of Survival"
  }, 
  {
    "series": "The Liveship Traders 01", 
    "author": {
      "lastName": "Hobb", 
      "firstName": "Robin"
    }, 
    "title": "Ship of Magic"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hugo", 
      "firstName": "Victor"
    }, 
    "title": "The Hunchback of Notre Dame"
  }, 
  {
    "series": "Rachel Morgan 04", 
    "author": {
      "lastName": "Harrison", 
      "firstName": "Kim"
    }, 
    "title": "A Fistful of Charms"
  }, 
  {
    "series": "Sookie Stackhouse 04", 
    "author": {
      "lastName": "Harris", 
      "firstName": "Charlaine"
    }, 
    "title": "Dead to the World"
  }, 
  {
    "series": "Dune 04", 
    "author": {
      "lastName": "Herbert", 
      "firstName": "Frank"
    }, 
    "title": "God Emperor of Dune"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hiaasen", 
      "firstName": "Carl"
    }, 
    "title": "Sick Puppy"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Handler", 
      "firstName": "Chelsea"
    }, 
    "title": "Chelsea Chelsea Bang Bang"
  }, 
  {
    "series": "Sookie Stackhouse 01", 
    "author": {
      "lastName": "Harris", 
      "firstName": "Charlaine"
    }, 
    "title": "Dead Until Dark"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hemingway", 
      "firstName": "Ernest"
    }, 
    "title": "For Whom the Bell Tolls"
  }, 
  {
    "series": "Hannibal 01", 
    "author": {
      "lastName": "Harris", 
      "firstName": "Thomas"
    }, 
    "title": "Red Dragon"
  }, 
  {
    "series": "Anita Blake 01", 
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Guilty Pleasures"
  }, 
  {
    "series": "Joe Pitt 01", 
    "author": {
      "lastName": "Huston", 
      "firstName": "Charlie"
    }, 
    "title": "Already Dead"
  }, 
  {
    "series": "Meredith Gentry 01", 
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "A Kiss of Shadows"
  }, 
  {
    "series": "Rain Wilds Chronicles 01", 
    "author": {
      "lastName": "Hobb", 
      "firstName": "Robin"
    }, 
    "title": "Dragon Keeper"
  }, 
  {
    "series": "Meredith Gentry 03", 
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Seduced by Moonlight"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hemingway", 
      "firstName": "Ernest"
    }, 
    "title": "The Sun Also Rises"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "", 
      "firstName": "Homer"
    }, 
    "title": "The Iliad"
  }, 
  {
    "series": "Rachel Morgan 09", 
    "author": {
      "lastName": "Harrison", 
      "firstName": "Kim"
    }, 
    "title": "Pale Demon"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Huxley", 
      "firstName": "Aldous"
    }, 
    "title": "Brave New World"
  }, 
  {
    "series": "Rachel Morgan 06", 
    "author": {
      "lastName": "Harrison", 
      "firstName": "Kim"
    }, 
    "title": "The Outlaw Demon Wails"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hale", 
      "firstName": "Benjamin"
    }, 
    "title": "The Evolution of Bruno Littlemore"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Heilemann", 
      "firstName": "John"
    }, 
    "title": "Game Change"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hornby", 
      "firstName": "Nick"
    }, 
    "title": "About a Boy"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hammett", 
      "firstName": "Dashiell"
    }, 
    "title": "The Maltese Falcon"
  }, 
  {
    "series": "Meredith Gentry 08", 
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Divine Misdemeanors"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hiaasen", 
      "firstName": "Carl"
    }, 
    "title": "Tourist Season"
  }, 
  {
    "series": "The Tawny Man 03", 
    "author": {
      "lastName": "Hobb", 
      "firstName": "Robin"
    }, 
    "title": "Fool's Fate"
  }, 
  {
    "series": "Joe Pitt 04", 
    "author": {
      "lastName": "Huston", 
      "firstName": "Charlie"
    }, 
    "title": "Every Last Drop"
  }, 
  {
    "series": "The Tawny Man 01", 
    "author": {
      "lastName": "Hobb", 
      "firstName": "Robin"
    }, 
    "title": "Fool's Errand"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Harding", 
      "firstName": "Paul"
    }, 
    "title": "Tinkers"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hornby", 
      "firstName": "Nick"
    }, 
    "title": "High Fidelity"
  }, 
  {
    "series": "Anita Blake 08", 
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Blue Moon"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hurston", 
      "firstName": "Zora Neale"
    }, 
    "title": "Their Eyes Were Watching God"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hitchens", 
      "firstName": "Christopher"
    }, 
    "title": "God is Not Great"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hedges", 
      "firstName": "Chris"
    }, 
    "title": "The World As It Is"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hugo", 
      "firstName": "Victor"
    }, 
    "title": "Les Miserables"
  }, 
  {
    "series": "Anita Blake 19", 
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Bullet"
  }, 
  {
    "series": "Anita Blake 15", 
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "The Harlequin"
  }, 
  {
    "series": "Anita Blake 16", 
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Blood Noir"
  }, 
  {
    "series": "The Farseer Trilogy 03", 
    "author": {
      "lastName": "Hobb", 
      "firstName": "Robin"
    }, 
    "title": "Assassin's Quest"
  }, 
  {
    "series": "Dune 03", 
    "author": {
      "lastName": "Herbert", 
      "firstName": "Frank"
    }, 
    "title": "Children of Dune"
  }, 
  {
    "series": "Henry Thompson 01", 
    "author": {
      "lastName": "Huston", 
      "firstName": "Charlie"
    }, 
    "title": "Caught Stealing"
  }, 
  {
    "series": "Meredith Gentry 05", 
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Mistral's Kiss"
  }, 
  {
    "series": "Sookie Stackhouse 06", 
    "author": {
      "lastName": "Harris", 
      "firstName": "Charlaine"
    }, 
    "title": "Definitely Dead"
  }, 
  {
    "series": "Sookie Stackhouse 02", 
    "author": {
      "lastName": "Harris", 
      "firstName": "Charlaine"
    }, 
    "title": "Living Dead in Dallas"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hazlitt", 
      "firstName": "Henry"
    }, 
    "title": "Economics in One Lesson"
  }, 
  {
    "series": "Joe Pitt 02", 
    "author": {
      "lastName": "Huston", 
      "firstName": "Charlie"
    }, 
    "title": "No Dominion"
  }, 
  {
    "series": "Dune 05", 
    "author": {
      "lastName": "Herbert", 
      "firstName": "Frank"
    }, 
    "title": "Heretics of Dune"
  }, 
  {
    "series": "Anita Blake 05", 
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Bloody Bones"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Heinlein", 
      "firstName": "Robert. A"
    }, 
    "title": "The Moon Is a Harsh Mistress"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Hesse", 
      "firstName": "Hermann"
    }, 
    "title": "Siddhartha"
  }, 
  {
    "series": "Meredith Gentry 07", 
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Swallowing Darkness"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "", 
      "firstName": "Malcom X"
    }, 
    "title": "The Autobiography of Malcolm X"
  }, 
  {
    "series": "Fever 04", 
    "author": {
      "lastName": "Moning", 
      "firstName": "Karen Marie"
    }, 
    "title": "Dreamfever"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "McCain", 
      "firstName": "Meghan"
    }, 
    "title": "Dirty Sexy Politics"
  }, 
  {
    "series": "Twilight 01", 
    "author": {
      "lastName": "Meyer", 
      "firstName": "Stephanie"
    }, 
    "title": "Twilight"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Mieville", 
      "firstName": "China"
    }, 
    "title": "Kraken"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Mailer", 
      "firstName": "Norman"
    }, 
    "title": "The Naked and the Dead"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "McEwan", 
      "firstName": "Ian"
    }, 
    "title": "Solar"
  }, 
  {
    "series": "A Song of Ice and Fire 02", 
    "author": {
      "lastName": "Martin", 
      "firstName": "George R.R."
    }, 
    "title": "A Clash of Kings"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Moore", 
      "firstName": "Christopher"
    }, 
    "title": "Fool"
  }, 
  {
    "series": "Roosevelt 03", 
    "author": {
      "lastName": "Morris", 
      "firstName": "Edmund"
    }, 
    "title": "Colonel Roosevelt"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Martin", 
      "firstName": "Steve"
    }, 
    "title": "An Object of Beauty"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "", 
      "firstName": "Misc."
    }, 
    "title": "Machine of Death"
  }, 
  {
    "series": "Kurt Wallander 08", 
    "author": {
      "lastName": "Mankell", 
      "firstName": "Henning"
    }, 
    "title": "Firewall"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "McLaughlin", 
      "firstName": "Emma"
    }, 
    "title": "The Nanny Diaries"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "McCarthy", 
      "firstName": "Cormac"
    }, 
    "title": "The Road"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Mitchell", 
      "firstName": "Margaret"
    }, 
    "title": "Gone with the Wind"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Melville", 
      "firstName": "Herman"
    }, 
    "title": "Moby Dick"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Mieville", 
      "firstName": "China"
    }, 
    "title": "The City & The City"
  }, 
  {
    "series": "Travis McGee 01", 
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "The Deep Blue Good-Bye"
  }, 
  {
    "series": "Abhorsen 03", 
    "author": {
      "lastName": "Nix", 
      "firstName": "Garth"
    }, 
    "title": "Abhorsen"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Moore", 
      "firstName": "Christopher"
    }, 
    "title": "Bloodsucking Fiends"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "McDougall", 
      "firstName": "Christopher"
    }, 
    "title": "Born to Run"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Max", 
      "firstName": "Tucker"
    }, 
    "title": "I Hope They Serve Beer In Hell"
  }, 
  {
    "series": "Jolie Wilkins 02", 
    "author": {
      "lastName": "Mallory", 
      "firstName": "H.P."
    }, 
    "title": "Toil and Trouble"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Miller", 
      "firstName": "Walter M."
    }, 
    "title": "A Canticle for Leibowitz"
  }, 
  {
    "series": "Kurt Wallander 07", 
    "author": {
      "lastName": "Mankell", 
      "firstName": "Henning"
    }, 
    "title": "One Step Behind"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Niffenegger", 
      "firstName": "Audrey"
    }, 
    "title": "The Time Traveler's Wife"
  }, 
  {
    "series": "Travis McGee 04", 
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "The Quick Red Fox"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Martin", 
      "firstName": "George R.R."
    }, 
    "title": "The Hedge Knight"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Neilan", 
      "firstName": "Paul"
    }, 
    "title": "Apathy and Other Small Victories"
  }, 
  {
    "series": "A Song of Ice and Fire 01", 
    "author": {
      "lastName": "Martin", 
      "firstName": "George R.R."
    }, 
    "title": "A Game Of Thrones"
  }, 
  {
    "series": "Fever 01", 
    "author": {
      "lastName": "Moning", 
      "firstName": "Karen Marie"
    }, 
    "title": "Darkfever"
  }, 
  {
    "series": "Travis McGee 02", 
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "Nightmare In Pink"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Mieville", 
      "firstName": "China"
    }, 
    "title": "The Scar"
  }, 
  {
    "series": "A Song of Ice and Fire 04", 
    "author": {
      "lastName": "Martin", 
      "firstName": "George R.R."
    }, 
    "title": "A Feast for Crows"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Marquez", 
      "firstName": "Gabriel Garcia"
    }, 
    "title": "One Hundred Years of Solitude"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Maugham", 
      "firstName": "W. Somerset"
    }, 
    "title": "The Razor's Edge"
  }, 
  {
    "series": "Fever 02", 
    "author": {
      "lastName": "Moning", 
      "firstName": "Karen Marie"
    }, 
    "title": "Bloodfever"
  }, 
  {
    "series": "Travis McGee 14", 
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "The Scarlet Ruse"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Martin", 
      "firstName": "Demetri"
    }, 
    "title": "This Is a Book"
  }, 
  {
    "series": "Kurt Wallander 05", 
    "author": {
      "lastName": "Mankell", 
      "firstName": "Henning"
    }, 
    "title": "Sidetracked"
  }, 
  {
    "series": "Kurt Wallander 04", 
    "author": {
      "lastName": "Mankell", 
      "firstName": "Henning"
    }, 
    "title": "The Man Who Smiled"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Nabokov", 
      "firstName": "Vladimir"
    }, 
    "title": "Lolita"
  }, 
  {
    "series": "Kurt Wallander 02", 
    "author": {
      "lastName": "Mankell", 
      "firstName": "Henning"
    }, 
    "title": "The Dogs of Riga"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Nozick", 
      "firstName": "Robert"
    }, 
    "title": "Anarchy, State, and Utopia"
  }, 
  {
    "series": "Takeshi Kovacs 02", 
    "author": {
      "lastName": "Morgan", 
      "firstName": "Richard"
    }, 
    "title": "Broken Angels"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Nietzsche", 
      "firstName": "Friedrich"
    }, 
    "title": "Beyond Good and Evil"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Moore", 
      "firstName": "Christopher"
    }, 
    "title": "The Lust Lizard of Melancholy Cove"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "McCullough", 
      "firstName": "Colleen"
    }, 
    "title": "The First Man in Rome"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "McLain", 
      "firstName": "Paula"
    }, 
    "title": "The Paris Wife"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Meyer", 
      "firstName": "Stephanie"
    }, 
    "title": "The Short Second Life of Bree Tanner"
  }, 
  {
    "series": "Roosevelt 01", 
    "author": {
      "lastName": "Morris", 
      "firstName": "Edmund"
    }, 
    "title": "The Rise of Theodore Roosevelt"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Maugham", 
      "firstName": "W. Somerset"
    }, 
    "title": "Of Human Bondage"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Marquez", 
      "firstName": "Gabriel Garcia"
    }, 
    "title": "Love in the Time of Cholera"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Metaxas", 
      "firstName": "Eric"
    }, 
    "title": "Bonhoeffer"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "McCammon", 
      "firstName": "Robert R."
    }, 
    "title": "Swan Song"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Morrell", 
      "firstName": "David"
    }, 
    "title": "Creepers"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "McCarthy", 
      "firstName": "Cormac"
    }, 
    "title": "Blood Meridian"
  }, 
  {
    "series": "Jolie Wilkins 01", 
    "author": {
      "lastName": "Mallory", 
      "firstName": "H.P."
    }, 
    "title": "Fire Burn and Cauldron Bubble"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Moore", 
      "firstName": "Christopher"
    }, 
    "title": "Bite Me"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Mitchell", 
      "firstName": "David"
    }, 
    "title": "Cloud Atlas"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "", 
      "firstName": "Madonna"
    }, 
    "title": "Sex"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "McMillan", 
      "firstName": "Terry"
    }, 
    "title": "A Day Late and a Dollar Short"
  }, 
  {
    "series": "Roosevelt 02", 
    "author": {
      "lastName": "Morris", 
      "firstName": "Edmund"
    }, 
    "title": "Theodore Rex"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "McKenna", 
      "firstName": "Terence"
    }, 
    "title": "Food of the Gods"
  }, 
  {
    "series": "Fever 05", 
    "author": {
      "lastName": "Moning", 
      "firstName": "Karen Marie"
    }, 
    "title": "Shadowfever"
  }, 
  {
    "series": "Fever 03", 
    "author": {
      "lastName": "Moning", 
      "firstName": "Karen Marie"
    }, 
    "title": "Faefever"
  }, 
  {
    "series": "Kurt Wallander 01", 
    "author": {
      "lastName": "Mankell", 
      "firstName": "Henning"
    }, 
    "title": "Faceless Killers"
  }, 
  {
    "series": "A Song of Ice and Fire 03", 
    "author": {
      "lastName": "Martin", 
      "firstName": "George R.R."
    }, 
    "title": "A Storm of Swords"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Miller", 
      "firstName": "Arthur"
    }, 
    "title": "The Crucible"
  }, 
  {
    "series": "Kurt Wallander 09", 
    "author": {
      "lastName": "Mankell", 
      "firstName": "Henning"
    }, 
    "title": "The Pyramid"
  }, 
  {
    "series": "Twilight 03", 
    "author": {
      "lastName": "Meyer", 
      "firstName": "Stephanie"
    }, 
    "title": "Eclipse"
  }, 
  {
    "series": "Travis McGee 18", 
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "The Green Ripper"
  }, 
  {
    "series": "Travis McGee 19", 
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "Free Fall in Crimson"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Nemirovsky", 
      "firstName": "Irene"
    }, 
    "title": "Suite Francaise"
  }, 
  {
    "series": "Travis McGee 10", 
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "The Girl in the Plain Brown Wrapper"
  }, 
  {
    "series": "Travis McGee 03", 
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "A Purple Place For Dying"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Mieville", 
      "firstName": "China"
    }, 
    "title": "Perdido Street Station"
  }, 
  {
    "series": "A Song of Ice and Fire 05", 
    "author": {
      "lastName": "Martin", 
      "firstName": "George R.R."
    }, 
    "title": "A Dance With Dragons"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Meyer", 
      "firstName": "Stephanie"
    }, 
    "title": "The Host"
  }, 
  {
    "series": "Kurt Wallander 03", 
    "author": {
      "lastName": "Mankell", 
      "firstName": "Henning"
    }, 
    "title": "The White Lioness"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "McCullough", 
      "firstName": "David"
    }, 
    "title": "John Adams"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Mukherjee", 
      "firstName": "Siddhartha"
    }, 
    "title": "The Emperor of All Maladies"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "McCullough", 
      "firstName": "Colleen"
    }, 
    "title": "Caesar"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Mieville", 
      "firstName": "China"
    }, 
    "title": "Iron Council"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Max", 
      "firstName": "Tucker"
    }, 
    "title": "Assholes Finish First"
  }, 
  {
    "series": "Kurt Wallander 06", 
    "author": {
      "lastName": "Mankell", 
      "firstName": "Henning"
    }, 
    "title": "The Fifth Woman"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Macomber", 
      "firstName": "Debbie"
    }, 
    "title": "A Turn in the Road"
  }, 
  {
    "series": "Takeshi Kovacs 01", 
    "author": {
      "lastName": "Morgan", 
      "firstName": "Richard"
    }, 
    "title": "Altered Carbon"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Murakami", 
      "firstName": "Haruki"
    }, 
    "title": "Norwegian Wood"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "McCarthy", 
      "firstName": "Cormac"
    }, 
    "title": "No Country for Old Men"
  }, 
  {
    "series": "Travis McGee 11", 
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "Dress Her In Indigo"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Murakami", 
      "firstName": "Haruki"
    }, 
    "title": "Kafka on the Shore"
  }, 
  {
    "series": "Travis McGee 08", 
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "One Fearful Yellow Eye"
  }, 
  {
    "series": "Travis McGee 21", 
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "The Lonely Silver Rain"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Morton", 
      "firstName": "Kate"
    }, 
    "title": "The Forgotten Garden"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Moore", 
      "firstName": "Christopher"
    }, 
    "title": "A Dirty Job"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Maguire", 
      "firstName": "Gregory"
    }, 
    "title": "Wicked"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "McCammon", 
      "firstName": "Robert R."
    }, 
    "title": "Boy's Life"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Marlantes", 
      "firstName": "Karl"
    }, 
    "title": "Matterhorn"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Moore", 
      "firstName": "Michael"
    }, 
    "title": "Dude, Where's My Country"
  }, 
  {
    "series": "Travis McGee 12", 
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "The Long Lavender Look"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "McEwan", 
      "firstName": "Ian"
    }, 
    "title": "Atonement"
  }, 
  {
    "series": "Twilight 04", 
    "author": {
      "lastName": "Meyer", 
      "firstName": "Stephanie"
    }, 
    "title": "Breaking Dawn"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Machiavelli", 
      "firstName": "Niccolo"
    }, 
    "title": "The Prince"
  }, 
  {
    "series": "Takeshi Kovacs 03", 
    "author": {
      "lastName": "Morgan", 
      "firstName": "Richard"
    }, 
    "title": "Woken Furies"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "McCullough", 
      "firstName": "David"
    }, 
    "title": "1776"
  }, 
  {
    "series": "Kurt Wallander 10", 
    "author": {
      "lastName": "Mankell", 
      "firstName": "Henning"
    }, 
    "title": "The Troubled Man"
  }, 
  {
    "series": "Abhorsen 01", 
    "author": {
      "lastName": "Nix", 
      "firstName": "Garth"
    }, 
    "title": "Sabriel"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Mantel", 
      "firstName": "Hilary"
    }, 
    "title": "Wolf Hall"
  }, 
  {
    "series": "Travis McGee 13", 
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "A Tan And Sandy Silence"
  }, 
  {
    "series": "Travis McGee 07", 
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "Darker Than Amber"
  }, 
  {
    "series": "Twilight 02", 
    "author": {
      "lastName": "Meyer", 
      "firstName": "Stephanie"
    }, 
    "title": "New Moon"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Mieville", 
      "firstName": "China"
    }, 
    "title": "Embassytown"
  }, 
  {
    "series": "Travis McGee 16", 
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "The Dreadful Lemon Sky"
  }, 
  {
    "series": "Travis McGee 06", 
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "Bright Orange for the Shroud"
  }, 
  {
    "series": "Travis McGee 09", 
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "Pale Gray For Guilt"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Martel", 
      "firstName": "Yann"
    }, 
    "title": "Life of Pi"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "McCarthy", 
      "firstName": "Cormac"
    }, 
    "title": "All the Pretty Horses"
  }, 
  {
    "series": "Travis McGee 17", 
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "The Empty Copper Sea"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Martin", 
      "firstName": "Steve"
    }, 
    "title": "Born Standing Up, A Comic's Life"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Matheson", 
      "firstName": "Richard"
    }, 
    "title": "I Am Legend"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Mitchell", 
      "firstName": "David"
    }, 
    "title": "The Thousand Autumns of Jacob de Zoet"
  }, 
  {
    "series": "Abhorsen 02", 
    "author": {
      "lastName": "Nix", 
      "firstName": "Garth"
    }, 
    "title": "Lirael"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Munn", 
      "firstName": "Olivia"
    }, 
    "title": "Suck It, Wonder Woman!"
  }, 
  {
    "series": "Travis McGee 05", 
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "A Deadly Shade Of Gold"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Miller", 
      "firstName": "Henry"
    }, 
    "title": "Tropic of Cancer"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Niven", 
      "firstName": "Larry"
    }, 
    "title": "Ringworld"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Maher", 
      "firstName": "Bill"
    }, 
    "title": "When You Ride Alone You Ride with Bin Laden"
  }, 
  {
    "series": "Travis McGee 15", 
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "The Turquoise Lament"
  }, 
  {
    "series": "Travis McGee 20", 
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "Cinnamon Skin"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Nietzsche", 
      "firstName": "Friedrich"
    }, 
    "title": "Basic Writing of Nietzsche"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Moore", 
      "firstName": "Christopher"
    }, 
    "title": "You Suck"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Gibson", 
      "firstName": "William"
    }, 
    "title": "Mona Lisa Overdrive"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Gaiman", 
      "firstName": "Neil"
    }, 
    "title": "Neverwhere"
  }, 
  {
    "series": "Sword of Truth 00", 
    "author": {
      "lastName": "Goodkind", 
      "firstName": "Terry"
    }, 
    "title": "Debt of Bones"
  }, 
  {
    "series": "Sword of Truth 05", 
    "author": {
      "lastName": "Goodkind", 
      "firstName": "Terry"
    }, 
    "title": "Soul of the Fire"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "T is for Trespass"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Griffin", 
      "firstName": "Kathy"
    }, 
    "title": "Official Book Club Selection, A Memoir According to Kathy Griffin"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "U is for Undertow"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "George", 
      "firstName": "Margaret"
    }, 
    "title": "Memoirs of Cleopatra"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grossman", 
      "firstName": "Lev"
    }, 
    "title": "The Magicians"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Goodwin", 
      "firstName": "Doris Kearns"
    }, 
    "title": "Team of Rivals"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grimm", 
      "firstName": "Wilhelm"
    }, 
    "title": "The Complete Grimm's Fairy Tales"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Gregory", 
      "firstName": "Philippa"
    }, 
    "title": "The White Queen"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Associate"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Greene", 
      "firstName": "Brian"
    }, 
    "title": "The Elegant Universe"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Rainmaker"
  }, 
  {
    "series": "Outlander 04", 
    "author": {
      "lastName": "Gabaldon", 
      "firstName": "Diana"
    }, 
    "title": "Drums of Autumn"
  }, 
  {
    "series": "Sword of Truth 09", 
    "author": {
      "lastName": "Goodkind", 
      "firstName": "Terry"
    }, 
    "title": "Chainfire"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Confession"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Gibson", 
      "firstName": "William"
    }, 
    "title": "Pattern Recognition"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Gaiman", 
      "firstName": "Neil"
    }, 
    "title": "American Gods"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Gibson", 
      "firstName": "William"
    }, 
    "title": "Johnny Mnemonic"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Greene", 
      "firstName": "Brian"
    }, 
    "title": "The Hidden Reality"
  }, 
  {
    "series": "Outlander 02", 
    "author": {
      "lastName": "Gabaldon", 
      "firstName": "Diana"
    }, 
    "title": "Dragonfly in Amber"
  }, 
  {
    "series": "Outlander 07", 
    "author": {
      "lastName": "Gabaldon", 
      "firstName": "Diana"
    }, 
    "title": "An Echo in the Bone"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Gladwell", 
      "firstName": "Malcolm"
    }, 
    "title": "Blink, The Power of Thinking Without Thinking"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Innocent Man"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "P is for Peril"
  }, 
  {
    "series": "Sword of Truth 07", 
    "author": {
      "lastName": "Goodkind", 
      "firstName": "Terry"
    }, 
    "title": "The Pillars of Creation"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grogan", 
      "firstName": "John"
    }, 
    "title": "Marley & Me"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Partner"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "Q is for Quarry"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Chamber"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Gibson", 
      "firstName": "William"
    }, 
    "title": "Spook Country"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "K is for Killer"
  }, 
  {
    "series": "Outlander 06", 
    "author": {
      "lastName": "Gabaldon", 
      "firstName": "Diana"
    }, 
    "title": "A Breath of Snow and Ashes"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Gaiman", 
      "firstName": "Neil"
    }, 
    "title": "Fragile Things"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Testament"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "A Time to Kill"
  }, 
  {
    "series": "Sword of Truth 11", 
    "author": {
      "lastName": "Goodkind", 
      "firstName": "Terry"
    }, 
    "title": "Confessor"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Golding", 
      "firstName": "William"
    }, 
    "title": "Lord of the Flies"
  }, 
  {
    "series": "Sword of Truth 02", 
    "author": {
      "lastName": "Goodkind", 
      "firstName": "Terry"
    }, 
    "title": "Stone of Tears"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Gregory", 
      "firstName": "Philippa"
    }, 
    "title": "The Red Queen"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "A is for Alibi"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Giffin", 
      "firstName": "Emily"
    }, 
    "title": "Baby Proof"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "O is for Outlaw"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Garland", 
      "firstName": "Alex"
    }, 
    "title": "The Beach"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Last Juror"
  }, 
  {
    "series": "Outlander 03", 
    "author": {
      "lastName": "Gabaldon", 
      "firstName": "Diana"
    }, 
    "title": "Voyager"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Goldman", 
      "firstName": "William"
    }, 
    "title": "The Princess Bride"
  }, 
  {
    "series": "Sword of Truth 10", 
    "author": {
      "lastName": "Goodkind", 
      "firstName": "Terry"
    }, 
    "title": "Phantom"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Gorant", 
      "firstName": "Jim"
    }, 
    "title": "The Lost Dogs"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Firm"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Gleick", 
      "firstName": "James"
    }, 
    "title": "The Information"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "B is for Burglar"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "D is for Deadbeat"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Gruen", 
      "firstName": "Sara"
    }, 
    "title": "Water for Elephants"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "N is for Noose"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The King of Torts"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "A Painted House"
  }, 
  {
    "series": "Outlander 01", 
    "author": {
      "lastName": "Gabaldon", 
      "firstName": "Diana"
    }, 
    "title": "Outlander"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "G is for Gumshoe"
  }, 
  {
    "series": "Outlander 05", 
    "author": {
      "lastName": "Gabaldon", 
      "firstName": "Diana"
    }, 
    "title": "The Fiery Cross"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Green", 
      "firstName": "Simon R."
    }, 
    "title": "Something from the Nightside"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Runaway Jury"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Gaiman", 
      "firstName": "Neil"
    }, 
    "title": "Coraline"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grippando", 
      "firstName": "James"
    }, 
    "title": "A King's Ransom"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grunwald", 
      "firstName": "Lisa"
    }, 
    "title": "The Irresistible Henry House"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Gilbert", 
      "firstName": "Elizabeth"
    }, 
    "title": "Eat, Pray, Love"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "", 
      "firstName": "Grimm Brothers"
    }, 
    "title": "Grimm's Fairy Tales"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Summons"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "E is for Evidence"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "Playing for Pizza"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Gemmell", 
      "firstName": "David"
    }, 
    "title": "Dark Moon"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Gaiman", 
      "firstName": "Neil"
    }, 
    "title": "Anansi Boys"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Pelican Brief"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Gladwell", 
      "firstName": "Malcolm"
    }, 
    "title": "Outliers, The Story of Success"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "Ford County"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Gleick", 
      "firstName": "James"
    }, 
    "title": "Genius, The Life and Science of Richard Feynman"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "R is for Ricochet"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Gaiman", 
      "firstName": "Neil"
    }, 
    "title": "The Graveyard Book"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "M is for Malice"
  }, 
  {
    "series": "Sword of Truth 06", 
    "author": {
      "lastName": "Goodkind", 
      "firstName": "Terry"
    }, 
    "title": "Faith of the Fallen"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "Skipping Christmas"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "H is for Homicide"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Client"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Giffin", 
      "firstName": "Emily"
    }, 
    "title": "Heart of the Matter"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Gregory", 
      "firstName": "Philippa"
    }, 
    "title": "The Boleyn Inheritance"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Broker"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grahame-Smith", 
      "firstName": "Seth"
    }, 
    "title": "Abraham Lincoln, Vampire Hunter"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Golden", 
      "firstName": "Arthur"
    }, 
    "title": "Memoirs of a Geisha"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "I is for Innocent"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "C is for Corpse"
  }, 
  {
    "series": "Sword of Truth 08", 
    "author": {
      "lastName": "Goodkind", 
      "firstName": "Terry"
    }, 
    "title": "Naked Empire"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Gregory", 
      "firstName": "Philippa"
    }, 
    "title": "The Other Boleyn Girl"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Brethren"
  }, 
  {
    "series": "Sword of Truth 03", 
    "author": {
      "lastName": "Goodkind", 
      "firstName": "Terry"
    }, 
    "title": "Blood of the Fold"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Gaiman", 
      "firstName": "Neil"
    }, 
    "title": "Stardust"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "L is for Lawless"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Giffin", 
      "firstName": "Emily"
    }, 
    "title": "Love the One You're With"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Gladwell", 
      "firstName": "Malcolm"
    }, 
    "title": "The Tipping Point, How Little Things Can Make a Big Difference"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Street Lawyer"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Greene", 
      "firstName": "Robert"
    }, 
    "title": "48 Laws of Power"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Giffin", 
      "firstName": "Emily"
    }, 
    "title": "Something Borrowed"
  }, 
  {
    "series": "Sword of Truth 01", 
    "author": {
      "lastName": "Goodkind", 
      "firstName": "Terry"
    }, 
    "title": "Wizard's First Rule"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "J is for Judgement"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Appeal"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Gibson", 
      "firstName": "William"
    }, 
    "title": "Burning Chrome"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Green", 
      "firstName": "John"
    }, 
    "title": "Will Grayson, Will Grayson"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Gaiman", 
      "firstName": "Neil"
    }, 
    "title": "Good Omens"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "S is for Silence"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grahame-Smith", 
      "firstName": "Seth"
    }, 
    "title": "Pride and Prejudice and Zombies"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Giffin", 
      "firstName": "Emily"
    }, 
    "title": "Something Blue"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Greitens", 
      "firstName": "Eric"
    }, 
    "title": "The Heart and the Fist"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Gibson", 
      "firstName": "William"
    }, 
    "title": "Count Zero"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Gibson", 
      "firstName": "William"
    }, 
    "title": "The Difference Engine"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "F is for Fugitive"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Gibson", 
      "firstName": "William"
    }, 
    "title": "Neuromancer"
  }, 
  {
    "series": "Sword of Truth 04", 
    "author": {
      "lastName": "Goodkind", 
      "firstName": "Terry"
    }, 
    "title": "Temple of the Winds"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "Bleachers"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Gibson", 
      "firstName": "William"
    }, 
    "title": "Zero History"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "George", 
      "firstName": "Margaret"
    }, 
    "title": "The Autobiography of Henry VIII"
  }, 
  {
    "series": "Thomas Covenant 07", 
    "author": {
      "lastName": "Donaldson", 
      "firstName": "Stephen R."
    }, 
    "title": "The Runes of the Earth"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Dalton", 
      "firstName": "C.H."
    }, 
    "title": "A Practical Guide to Racism"
  }, 
  {
    "series": "Thomas Covenant 04", 
    "author": {
      "lastName": "Donaldson", 
      "firstName": "Stephen R."
    }, 
    "title": "The Wounded Land"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Darwin", 
      "firstName": "Charles"
    }, 
    "title": "The Origin of Species"
  }, 
  {
    "series": "Circle 04", 
    "author": {
      "lastName": "Dekker", 
      "firstName": "Ted"
    }, 
    "title": "Green"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Dickens", 
      "firstName": "Charles"
    }, 
    "title": "David Copperfield"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Dick", 
      "firstName": "Philip K."
    }, 
    "title": "Valis"
  }, 
  {
    "series": "The Strain Trilogy 01", 
    "author": {
      "lastName": "Del Toro", 
      "firstName": "Guillermo"
    }, 
    "title": "The Strain"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "DeMille", 
      "firstName": "Nelson"
    }, 
    "title": "Night Fall"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Dekker", 
      "firstName": "Ted"
    }, 
    "title": "The Bride Collector"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Dickens", 
      "firstName": "Charles"
    }, 
    "title": "A Christmas Carol"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "DeMille", 
      "firstName": "Nelson"
    }, 
    "title": "Cathedral"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Dick", 
      "firstName": "Philip K."
    }, 
    "title": "Do Androids Dream of Electric Sheep"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Dumas", 
      "firstName": "Alexandre"
    }, 
    "title": "The Count of Monte Cristo"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Dickens", 
      "firstName": "Charles"
    }, 
    "title": "Oliver Twist"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Defoe", 
      "firstName": "Daniel"
    }, 
    "title": "Robinson Crusoe"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Dickens", 
      "firstName": "Charles"
    }, 
    "title": "Our Mutual Friend"
  }, 
  {
    "series": "Circle 01", 
    "author": {
      "lastName": "Dekker", 
      "firstName": "Ted"
    }, 
    "title": "Black"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Dostoyevsky", 
      "firstName": "Fyodor"
    }, 
    "title": "The Idiot"
  }, 
  {
    "series": "Circle 02", 
    "author": {
      "lastName": "Dekker", 
      "firstName": "Ted"
    }, 
    "title": "Red"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "DeMille", 
      "firstName": "Nelson"
    }, 
    "title": "Word of Honor"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Dick", 
      "firstName": "Philip K."
    }, 
    "title": "Flow My Tears, The Policeman Said"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Dukan", 
      "firstName": "Pierre"
    }, 
    "title": "The Dukan Diet"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Dawkins", 
      "firstName": "Richard"
    }, 
    "title": "The Greatest Show on Earth, The Evidence for Evolution"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Dawkins", 
      "firstName": "Richard"
    }, 
    "title": "The Selfish Gene"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "DeMille", 
      "firstName": "Nelson"
    }, 
    "title": "The Lion's Game"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Diamant", 
      "firstName": "Anita"
    }, 
    "title": "The Red Tent"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Dawkins", 
      "firstName": "Richard"
    }, 
    "title": "The Ancestor's Tale"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Dick", 
      "firstName": "Philip K."
    }, 
    "title": "The Man in the High Castle"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Dreiser", 
      "firstName": "Theodore"
    }, 
    "title": "Sister Carrie"
  }, 
  {
    "series": "Thomas Covenant 03", 
    "author": {
      "lastName": "Donaldson", 
      "firstName": "Stephen R."
    }, 
    "title": "The Power That Preserves"
  }, 
  {
    "series": "Thomas Covenant 09", 
    "author": {
      "lastName": "Donaldson", 
      "firstName": "Stephen R."
    }, 
    "title": "Against All Things Ending"
  }, 
  {
    "series": "Thomas Covenant 05", 
    "author": {
      "lastName": "Donaldson", 
      "firstName": "Stephen R."
    }, 
    "title": "The One Tree"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "DeLillo", 
      "firstName": "Don"
    }, 
    "title": "Underworld"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Dick", 
      "firstName": "Philip K."
    }, 
    "title": "The Three Stigmata of Palmer Eldritch"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "DeMille", 
      "firstName": "Nelson"
    }, 
    "title": "Wild Fire"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Dumas", 
      "firstName": "Alexandre"
    }, 
    "title": "The Three Musketeers"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Dunn", 
      "firstName": "Katherine"
    }, 
    "title": "Geek Love"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Dostoyevsky", 
      "firstName": "Fyodor"
    }, 
    "title": "The Brothers Karamazov"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Diaz", 
      "firstName": "Junot"
    }, 
    "title": "The Brief Wondrous Life of Oscar Wao"
  }, 
  {
    "series": "Thomas Covenant 08", 
    "author": {
      "lastName": "Donaldson", 
      "firstName": "Stephen R."
    }, 
    "title": "The Fatal Revenant"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Dick", 
      "firstName": "Philip K."
    }, 
    "title": "The Minority Report"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "DeMille", 
      "firstName": "Nelson"
    }, 
    "title": "Plum Island"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Doyle", 
      "firstName": "Arthur Conan"
    }, 
    "title": "Sherlock Holmes Illustrated"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Dickens", 
      "firstName": "Charles"
    }, 
    "title": "Hard Times"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Dickens", 
      "firstName": "Charles"
    }, 
    "title": "A Tale of Two Cities"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "DeMille", 
      "firstName": "Nelson"
    }, 
    "title": "Up Country"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Dawkins", 
      "firstName": "Richard"
    }, 
    "title": "The God Delusion"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Dahl", 
      "firstName": "Roald"
    }, 
    "title": "Charlie and the Chocolate Factory"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Dostoyevsky", 
      "firstName": "Fyodor"
    }, 
    "title": "Crime and Punishment"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Diamond", 
      "firstName": "Jared"
    }, 
    "title": "Guns, Germs and Steel"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Defoe", 
      "firstName": "Daniel"
    }, 
    "title": "Moll Flanders"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "DeMille", 
      "firstName": "Nelson"
    }, 
    "title": "The Lion"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Dick", 
      "firstName": "Philip K."
    }, 
    "title": "A Scanner Darkly"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Diamond", 
      "firstName": "Jared"
    }, 
    "title": "Collapse"
  }, 
  {
    "series": "Thomas Covenant 02", 
    "author": {
      "lastName": "Donaldson", 
      "firstName": "Stephen R."
    }, 
    "title": "The Ill-Earth War"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Dick", 
      "firstName": "Philip K."
    }, 
    "title": "Ubik"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Dickens", 
      "firstName": "Charles"
    }, 
    "title": "Bleak House"
  }, 
  {
    "series": "Thomas Covenant 06", 
    "author": {
      "lastName": "Donaldson", 
      "firstName": "Stephen R."
    }, 
    "title": "White Gold Wielder"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "DeLillo", 
      "firstName": "Don"
    }, 
    "title": "White Noise"
  }, 
  {
    "series": "Thomas Covenant 01", 
    "author": {
      "lastName": "Donaldson", 
      "firstName": "Stephen R."
    }, 
    "title": "Lord Foul's Bane"
  }, 
  {
    "series": "Circle 03", 
    "author": {
      "lastName": "Dekker", 
      "firstName": "Ted"
    }, 
    "title": "White"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Dickens", 
      "firstName": "Charles"
    }, 
    "title": "Great Expectations"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "DeMille", 
      "firstName": "Nelson"
    }, 
    "title": "The General's Daughter"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Donoghue", 
      "firstName": "Emma"
    }, 
    "title": "Room"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "DeMille", 
      "firstName": "Nelson"
    }, 
    "title": "The Gold Coast"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Dumas", 
      "firstName": "Alexandre"
    }, 
    "title": "The Man in the Iron Mask"
  }, 
  {
    "series": "The Strain Trilogy 02", 
    "author": {
      "lastName": "Del Toro", 
      "firstName": "Guillermo"
    }, 
    "title": "The Fall"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Douglass", 
      "firstName": "Frederick"
    }, 
    "title": "Narrative of the Life of Frederick Douglass"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Demick", 
      "firstName": "Barbara"
    }, 
    "title": "Nothing to Envy"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Dekker", 
      "firstName": "Ted"
    }, 
    "title": "Thr3e"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Fitzgerald", 
      "firstName": "F. Scott"
    }, 
    "title": "The Great Gatsby"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Franzen", 
      "firstName": "Jonathan"
    }, 
    "title": "Freedom"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Feist", 
      "firstName": "Raymond E."
    }, 
    "title": "Magician, Apprentice"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Ferguson", 
      "firstName": "Niall"
    }, 
    "title": "The Ascent of Money"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Frey", 
      "firstName": "James"
    }, 
    "title": "Bright Shiny Morning"
  }, 
  {
    "series": "Ranger's Apprentice 08", 
    "author": {
      "lastName": "Flanagan", 
      "firstName": "John"
    }, 
    "title": "The Kings of Clonmel"
  }, 
  {
    "series": "Ranger's Apprentice 06", 
    "author": {
      "lastName": "Flanagan", 
      "firstName": "John"
    }, 
    "title": "The Siege of Macindaw"
  }, 
  {
    "series": "Ranger's Apprentice 03", 
    "author": {
      "lastName": "Flanagan", 
      "firstName": "John"
    }, 
    "title": "The Icebound Land"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Franzen", 
      "firstName": "Jonathan"
    }, 
    "title": "The Corrections"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Fox", 
      "firstName": "Michael J."
    }, 
    "title": "Always Looking Up, The Adventures of an Incurable Optimist"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Foer", 
      "firstName": "Jonathan Safran"
    }, 
    "title": "Extremely Loud & Incredibly Close"
  }, 
  {
    "series": "Ranger's Apprentice 05", 
    "author": {
      "lastName": "Flanagan", 
      "firstName": "John"
    }, 
    "title": "The Sorcerer of the North"
  }, 
  {
    "series": "Thursday Next 06", 
    "author": {
      "lastName": "Fforde", 
      "firstName": "Jasper"
    }, 
    "title": "One of Our Thursdays is Missing"
  }, 
  {
    "series": "Ranger's Apprentice 01", 
    "author": {
      "lastName": "Flanagan", 
      "firstName": "John"
    }, 
    "title": "The Ruins of Gorlan"
  }, 
  {
    "series": "Thursday Next 05", 
    "author": {
      "lastName": "Fforde", 
      "firstName": "Jasper"
    }, 
    "title": "First Among Sequels"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Faber", 
      "firstName": "Michel"
    }, 
    "title": "The Crimson Petal and the White"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Farmer", 
      "firstName": "Philip Jose"
    }, 
    "title": "To Your Scattered Bodies Go"
  }, 
  {
    "series": "Ranger's Apprentice 04", 
    "author": {
      "lastName": "Flanagan", 
      "firstName": "John"
    }, 
    "title": "The Battle for Skandia"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Fitzgerald", 
      "firstName": "F. Scott"
    }, 
    "title": "Tender is the Night"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Flaubert", 
      "firstName": "Gustave"
    }, 
    "title": "Sentimental Education"
  }, 
  {
    "series": "The Civil War Vol. 1", 
    "author": {
      "lastName": "Foote", 
      "firstName": "Shelby"
    }, 
    "title": "Fort Sumter to Perryville"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Frey", 
      "firstName": "James"
    }, 
    "title": "The Key"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Follett", 
      "firstName": "Ken"
    }, 
    "title": "The Key to Rebecca"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "French", 
      "firstName": "Tana"
    }, 
    "title": "Faithful Place"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Follett", 
      "firstName": "Ken"
    }, 
    "title": "Fall of Giants"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Feynman", 
      "firstName": "Richard P."
    }, 
    "title": "Surely You're Joking, Mr. Feynman!"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Feist", 
      "firstName": "Raymond E."
    }, 
    "title": "A Kingdom Besieged"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Ferriss", 
      "firstName": "Timothy"
    }, 
    "title": "The 4-Hour Workweek"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Frank", 
      "firstName": "Pat"
    }, 
    "title": "Alas, Babylon"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Follett", 
      "firstName": "Ken"
    }, 
    "title": "World Without End"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Frank", 
      "firstName": "Anne"
    }, 
    "title": "The Diary of a Young Girl"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Ferguson", 
      "firstName": "Craig"
    }, 
    "title": "American on Purpose, The Improbable Adventures of an Unlikely Patriot"
  }, 
  {
    "series": "Ranger's Apprentice 09", 
    "author": {
      "lastName": "Flanagan", 
      "firstName": "John"
    }, 
    "title": "Halt's Peril"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Foer", 
      "firstName": "Joshua"
    }, 
    "title": "Moonwalking With Einstein, The Art and Science of Remembering Everything"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Friedlander", 
      "firstName": "Judah"
    }, 
    "title": "How to Beat Up Anybody"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "French", 
      "firstName": "Tana"
    }, 
    "title": "The Likeness"
  }, 
  {
    "series": "Thursday Next 01", 
    "author": {
      "lastName": "Fforde", 
      "firstName": "Jasper"
    }, 
    "title": "The Eyre Affair"
  }, 
  {
    "series": "The Civil War Vol. 3", 
    "author": {
      "lastName": "Foote", 
      "firstName": "Shelby"
    }, 
    "title": "Red River to Appomattox"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Flaubert", 
      "firstName": "Gustave"
    }, 
    "title": "Madame Bovary"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Frost", 
      "firstName": "Robert"
    }, 
    "title": "The Road Not Taken"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Fabiano", 
      "firstName": "Laurie"
    }, 
    "title": "Elizabeth Street"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Fitzgerald", 
      "firstName": "F. Scott"
    }, 
    "title": "The Beautiful and Damned"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Follett", 
      "firstName": "Ken"
    }, 
    "title": "Jackdaws"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Ferriss", 
      "firstName": "Timothy"
    }, 
    "title": "The 4-Hour Body"
  }, 
  {
    "series": "Thursday Next 02", 
    "author": {
      "lastName": "Fforde", 
      "firstName": "Jasper"
    }, 
    "title": "Lost in a Good Book"
  }, 
  {
    "series": "Thursday Next 04", 
    "author": {
      "lastName": "Fforde", 
      "firstName": "Jasper"
    }, 
    "title": "Something Rotten"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Frazier", 
      "firstName": "Charles"
    }, 
    "title": "Cold Mountain"
  }, 
  {
    "series": "Ranger's Apprentice 07", 
    "author": {
      "lastName": "Flanagan", 
      "firstName": "John"
    }, 
    "title": "Erak's Ransom"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Follett", 
      "firstName": "Ken"
    }, 
    "title": "The Pillars of the Earth"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Fowles", 
      "firstName": "John"
    }, 
    "title": "The French Lieutenant's Woman"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Foer", 
      "firstName": "Jonathan Safran"
    }, 
    "title": "Extremely Loud and Incredibly Close"
  }, 
  {
    "series": "The Civil War Vol. 2", 
    "author": {
      "lastName": "Foote", 
      "firstName": "Shelby"
    }, 
    "title": "Fredericksburg to Meridian"
  }, 
  {
    "series": "Ranger's Apprentice 02", 
    "author": {
      "lastName": "Flanagan", 
      "firstName": "John"
    }, 
    "title": "The Burning Bridge"
  }, 
  {
    "series": "Thursday Next 03", 
    "author": {
      "lastName": "Fforde", 
      "firstName": "Jasper"
    }, 
    "title": "The Well of Lost Plots"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Fukuyama", 
      "firstName": "Francis"
    }, 
    "title": "Origins of Political Order"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Ford", 
      "firstName": "Jamie"
    }, 
    "title": "Hotel on the Corner of Bitter and Sweet"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Fielding", 
      "firstName": "Helen"
    }, 
    "title": "Bridget Jones's Diary"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Flynn", 
      "firstName": "Gillian"
    }, 
    "title": "Dark Places"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Follett", 
      "firstName": "Ken"
    }, 
    "title": "The Man from St. Petersburg"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Frey", 
      "firstName": "James"
    }, 
    "title": "A Million Little Pieces"
  }, 
  {
    "series": "Ranger's Apprentice 10", 
    "author": {
      "lastName": "Flanagan", 
      "firstName": "John"
    }, 
    "title": "The Emperor of Nihon-Ja"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Fey", 
      "firstName": "Tina"
    }, 
    "title": "Bossypants"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Fitzgerald", 
      "firstName": "F. Scott"
    }, 
    "title": "This Side of Paradise"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "French", 
      "firstName": "Tana"
    }, 
    "title": "In the Woods"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Foer", 
      "firstName": "Jonathan Safran"
    }, 
    "title": "Eating Animals"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Smith", 
      "firstName": "Patti"
    }, 
    "title": "Just Kids"
  }, 
  {
    "series": "The Baroque Cycle 03", 
    "author": {
      "lastName": "Stephenson", 
      "firstName": "Neal"
    }, 
    "title": "The System of the World"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Snyder", 
      "firstName": "Blake"
    }, 
    "title": "Save the Cat!"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Stegner", 
      "firstName": "Wallace"
    }, 
    "title": "Angle of Repose"
  }, 
  {
    "series": "The Baroque Cycle 01", 
    "author": {
      "lastName": "Stephenson", 
      "firstName": "Neal"
    }, 
    "title": "Quicksilver"
  }, 
  {
    "series": "1", 
    "author": {
      "lastName": "Stroud", 
      "firstName": "Jonathan"
    }, 
    "title": "The Amulet of Samarkand"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Sebold", 
      "firstName": "Alice"
    }, 
    "title": "The Lovely Bones"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Stephenson", 
      "firstName": "Neal"
    }, 
    "title": "The Diamond Age"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Smith", 
      "firstName": "Scott"
    }, 
    "title": "A Simple Plan"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Shelley", 
      "firstName": "Mary"
    }, 
    "title": "Frankenstein"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Scalzi", 
      "firstName": "John"
    }, 
    "title": "The Android's Dream"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Saylor", 
      "firstName": "Steven"
    }, 
    "title": "Roma"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Salinger", 
      "firstName": "J.D."
    }, 
    "title": "The Catcher in the Rye"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Snyder", 
      "firstName": "Timothy"
    }, 
    "title": "Bloodlands, Europe Between Hitler and Stalin"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Sparks", 
      "firstName": "Nicholas"
    }, 
    "title": "Dear John"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Solzhenitsyn", 
      "firstName": "Alexander"
    }, 
    "title": "One Day in the Life of Ivan Denisovich"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Stephenson", 
      "firstName": "Neal"
    }, 
    "title": "Cryptonomicon"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Stein", 
      "firstName": "Garth"
    }, 
    "title": "The Art of Racing in the Rain###"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Silverman", 
      "firstName": "Sarah"
    }, 
    "title": "The Bedwetter"
  }, 
  {
    "series": "Old Man's War 03", 
    "author": {
      "lastName": "Scalzi", 
      "firstName": "John"
    }, 
    "title": "The Last Colony"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Styron", 
      "firstName": "William"
    }, 
    "title": "Sophie's Choice"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Simmons", 
      "firstName": "Dan"
    }, 
    "title": "Olympos"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Shaw", 
      "firstName": "Bernard"
    }, 
    "title": "Pygmalion"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Shteyngart", 
      "firstName": "Gary"
    }, 
    "title": "Super Sad True Love Story"
  }, 
  {
    "series": "Hyperion Cantos 02", 
    "author": {
      "lastName": "Simmons", 
      "firstName": "Dan"
    }, 
    "title": "The Fall of Hyperion"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Steinbeck", 
      "firstName": "John"
    }, 
    "title": "Of Mice and Men"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Schiff", 
      "firstName": "Stacy"
    }, 
    "title": "Cleopatra"
  }, 
  {
    "series": "A Series of Unfortunate Events 02", 
    "author": {
      "lastName": "Snicket", 
      "firstName": "Lemony"
    }, 
    "title": "The Reptile Room"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Sixx", 
      "firstName": "Nikki"
    }, 
    "title": "The Heroin Diaries"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Shakespeare", 
      "firstName": "William"
    }, 
    "title": "The Winter's Tale"
  }, 
  {
    "series": "Hyperion Cantos 04", 
    "author": {
      "lastName": "Simmons", 
      "firstName": "Dan"
    }, 
    "title": "The Rise of Endymion"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Stein", 
      "firstName": "Sol"
    }, 
    "title": "Stein on Writing"
  }, 
  {
    "series": "Old Man's War 02", 
    "author": {
      "lastName": "Scalzi", 
      "firstName": "John"
    }, 
    "title": "The Ghost Brigades"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Straub", 
      "firstName": "Peter"
    }, 
    "title": "Ghost Story"
  }, 
  {
    "series": "The Baroque Cycle 02", 
    "author": {
      "lastName": "Stephenson", 
      "firstName": "Neal"
    }, 
    "title": "The Confusion"
  }, 
  {
    "series": "A Series of Unfortunate Events 07", 
    "author": {
      "lastName": "Snicket", 
      "firstName": "Lemony"
    }, 
    "title": "The Vile Village"
  }, 
  {
    "series": "A Series of Unfortunate Events 10", 
    "author": {
      "lastName": "Snicket", 
      "firstName": "Lemony"
    }, 
    "title": "The Slippery Slope"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Sedaris", 
      "firstName": "David"
    }, 
    "title": "Dress Your Family in Corduroy and Denim"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Seton", 
      "firstName": "Anya"
    }, 
    "title": "Katherine"
  }, 
  {
    "series": "A Series of Unfortunate Events 01", 
    "author": {
      "lastName": "Snicket", 
      "firstName": "Lemony"
    }, 
    "title": "The Bad Beginning"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Shakespeare", 
      "firstName": "William"
    }, 
    "title": "Henry IV (Part 1)"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Sawyer", 
      "firstName": "Robert J."
    }, 
    "title": "Factoring Humanity"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Sagan", 
      "firstName": "Carl"
    }, 
    "title": "Cosmos"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Smith", 
      "firstName": "Betty"
    }, 
    "title": "A Tree Grows in Brooklyn"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Sendak", 
      "firstName": "Maurice"
    }, 
    "title": "Where The Wild Things Are"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Shakespeare", 
      "firstName": "William"
    }, 
    "title": "Hamlet"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Shakespeare", 
      "firstName": "William"
    }, 
    "title": "The Merchant of Venice"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Strout", 
      "firstName": "Elizabeth"
    }, 
    "title": "Olive Kitteridge"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Simmons", 
      "firstName": "Dan"
    }, 
    "title": "Drood"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Stockett", 
      "firstName": "Kathryn"
    }, 
    "title": "The Help"
  }, 
  {
    "series": "Arthurian Saga 02", 
    "author": {
      "lastName": "Stewart", 
      "firstName": "Mary"
    }, 
    "title": "The Hollow Hills"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Sedaris", 
      "firstName": "David"
    }, 
    "title": "Squirrel Seeks Chipmunk"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Shute", 
      "firstName": "Nevil"
    }, 
    "title": "On The Beach"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Shute", 
      "firstName": "Nevil"
    }, 
    "title": "A Town Like Alice"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Sanderson", 
      "firstName": "Brandon"
    }, 
    "title": "Elantris"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Shakespeare", 
      "firstName": "William"
    }, 
    "title": "Romeo and Juliet"
  }, 
  {
    "series": "Arthurian Saga 03", 
    "author": {
      "lastName": "Stewart", 
      "firstName": "Mary"
    }, 
    "title": "The Last Enchantment"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Setterfield", 
      "firstName": "Diane"
    }, 
    "title": "The Thirteenth Tale"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Sparks", 
      "firstName": "Nicholas"
    }, 
    "title": "The Notebook"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Sagan", 
      "firstName": "Carl"
    }, 
    "title": "Contact"
  }, 
  {
    "series": "Old Man's War 01", 
    "author": {
      "lastName": "Scalzi", 
      "firstName": "John"
    }, 
    "title": "Old Man's War"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Sagan", 
      "firstName": "Carl"
    }, 
    "title": "The Demon Haunted World"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Sagan", 
      "firstName": "Carl"
    }, 
    "title": "Pale Blue Dot"
  }, 
  {
    "series": "A Series of Unfortunate Events 08", 
    "author": {
      "lastName": "Snicket", 
      "firstName": "Lemony"
    }, 
    "title": "The Hostile Hospital"
  }, 
  {
    "series": "Hyperion Cantos 01", 
    "author": {
      "lastName": "Simmons", 
      "firstName": "Dan"
    }, 
    "title": "Hyperion"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Stevenson", 
      "firstName": "Robert Lous"
    }, 
    "title": "The Strange Case of Dr. Jekyll and Mr. Hyde"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Saramago", 
      "firstName": "Jose"
    }, 
    "title": "Blindness"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Shakespeare", 
      "firstName": "William"
    }, 
    "title": "The Tempest"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Simmons", 
      "firstName": "Dan"
    }, 
    "title": "Summer of Night"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Sparks", 
      "firstName": "Nicholas"
    }, 
    "title": "Message in a Bottle"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Sinclair", 
      "firstName": "Upton"
    }, 
    "title": "The Jungle"
  }, 
  {
    "series": "A Series of Unfortunate Events 12", 
    "author": {
      "lastName": "Snicket", 
      "firstName": "Lemony"
    }, 
    "title": "The Penultimate Peril"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Sparks", 
      "firstName": "Nicholas"
    }, 
    "title": "Nights in Rodanthe"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Shermer", 
      "firstName": "Michael"
    }, 
    "title": "Why People Believe Weird Things"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Stephenson", 
      "firstName": "Neal"
    }, 
    "title": "Snow Crash"
  }, 
  {
    "series": "Arthurian Saga 04", 
    "author": {
      "lastName": "Stewart", 
      "firstName": "Mary"
    }, 
    "title": "The Wicked Day"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Scott", 
      "firstName": "Walter"
    }, 
    "title": "Ivanhoe"
  }, 
  {
    "series": "A Series of Unfortunate Events 05", 
    "author": {
      "lastName": "Snicket", 
      "firstName": "Lemony"
    }, 
    "title": "The Austere Academy"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Stoker", 
      "firstName": "Bram"
    }, 
    "title": "Dracula"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Strauss", 
      "firstName": "Neil"
    }, 
    "title": "The Game"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Shakespeare", 
      "firstName": "William"
    }, 
    "title": "Othello"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "", 
      "firstName": "Sapphire"
    }, 
    "title": "Push"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Steinbeck", 
      "firstName": "John"
    }, 
    "title": "Tortilla Flat"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Sparks", 
      "firstName": "Nicholas"
    }, 
    "title": "Safe Haven"
  }, 
  {
    "series": "A Series of Unfortunate Events 04", 
    "author": {
      "lastName": "Snicket", 
      "firstName": "Lemony"
    }, 
    "title": "The Miserable Mill"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Simmons", 
      "firstName": "Dan"
    }, 
    "title": "Ilium"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Stevenson", 
      "firstName": "Robert Louis"
    }, 
    "title": "Treasure Island"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Steinbeck", 
      "firstName": "John"
    }, 
    "title": "Cannery Row"
  }, 
  {
    "series": "A Series of Unfortunate Events 13", 
    "author": {
      "lastName": "Snicket", 
      "firstName": "Lemony"
    }, 
    "title": "The End"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Sparks", 
      "firstName": "Nicholas"
    }, 
    "title": "A Bend in the Road"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Sparks", 
      "firstName": "Nicholas"
    }, 
    "title": "A Walk to Remember"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Sass", 
      "firstName": "Erik"
    }, 
    "title": "The Mental Floss History of the World"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Sparks", 
      "firstName": "Nicholas"
    }, 
    "title": "At First Sight"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Sedaris", 
      "firstName": "David"
    }, 
    "title": "Naked"
  }, 
  {
    "series": "3", 
    "author": {
      "lastName": "Stroud", 
      "firstName": "Jonathan"
    }, 
    "title": "Ptolemy's Gate"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Sigler", 
      "firstName": "Scott"
    }, 
    "title": "Infected"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Stephenson", 
      "firstName": "Neal"
    }, 
    "title": "Anathem"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Stowe", 
      "firstName": "Harriet Beecher"
    }, 
    "title": "Uncle Tom's Cabin"
  }, 
  {
    "series": "A Series of Unfortunate Events 06", 
    "author": {
      "lastName": "Snicket", 
      "firstName": "Lemony"
    }, 
    "title": "The Ersatz Elevator"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Steinbeck", 
      "firstName": "John"
    }, 
    "title": "The Pearl"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Steakley", 
      "firstName": "John"
    }, 
    "title": "Armor"
  }, 
  {
    "series": "A Series of Unfortunate Events 11", 
    "author": {
      "lastName": "Snicket", 
      "firstName": "Lemony"
    }, 
    "title": "The Grim Grotto"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Singh", 
      "firstName": "Simon"
    }, 
    "title": "The Code Book"
  }, 
  {
    "series": "4", 
    "author": {
      "lastName": "Stroud", 
      "firstName": "Jonathan"
    }, 
    "title": "The Ring of Solomon"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Sawyer", 
      "firstName": "Robert J."
    }, 
    "title": "Flashforward"
  }, 
  {
    "series": "Arthurian Saga 01", 
    "author": {
      "lastName": "Stewart", 
      "firstName": "Mary"
    }, 
    "title": "The Crystal Cave"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Sharlet", 
      "firstName": "Jeff"
    }, 
    "title": "The Family"
  }, 
  {
    "series": "Hyperion Cantos 03", 
    "author": {
      "lastName": "Simmons", 
      "firstName": "Dan"
    }, 
    "title": "Endymion"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Steinbeck", 
      "firstName": "John"
    }, 
    "title": "East of Eden"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Simmons", 
      "firstName": "Dan"
    }, 
    "title": "Carrion Comfort"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Shaffer", 
      "firstName": "Mary Ann"
    }, 
    "title": "The Guernsey Literary and Potato Peel Pie Society"
  }, 
  {
    "series": "Mistborn 01", 
    "author": {
      "lastName": "Sanderson", 
      "firstName": "Brandon"
    }, 
    "title": "Mistborn"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Sanderson", 
      "firstName": "Brandon"
    }, 
    "title": "The Way of Kings"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Smith", 
      "firstName": "Scott"
    }, 
    "title": "The Ruins"
  }, 
  {
    "series": "A Series of Unfortunate Events 09", 
    "author": {
      "lastName": "Snicket", 
      "firstName": "Lemony"
    }, 
    "title": "The Carnivorous Carnival"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Styron", 
      "firstName": "William"
    }, 
    "title": "The Confessions of Nat Turner"
  }, 
  {
    "series": "Mistborn 03", 
    "author": {
      "lastName": "Sanderson", 
      "firstName": "Brandon"
    }, 
    "title": "The Hero of Ages"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Shakespeare", 
      "firstName": "William"
    }, 
    "title": "The Oxford Complete Works of Shakespeare"
  }, 
  {
    "series": "2", 
    "author": {
      "lastName": "Stroud", 
      "firstName": "Jonathan"
    }, 
    "title": "The Golem's Eye"
  }, 
  {
    "series": "Mistborn 02", 
    "author": {
      "lastName": "Sanderson", 
      "firstName": "Brandon"
    }, 
    "title": "The Well of Ascension"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Simmons", 
      "firstName": "Dan"
    }, 
    "title": "The Terror"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Sanderson", 
      "firstName": "Brandon"
    }, 
    "title": "Warbreaker"
  }, 
  {
    "series": "A Series of Unfortunate Events 03", 
    "author": {
      "lastName": "Snicket", 
      "firstName": "Lemony"
    }, 
    "title": "The Wide Window"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Sawyer", 
      "firstName": "Robert J."
    }, 
    "title": "Calculating God"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Sedaris", 
      "firstName": "David"
    }, 
    "title": "Me Talk Pretty One Day"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Simonson", 
      "firstName": "Helen"
    }, 
    "title": "Major Pettigrew's Last Stand"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Swift", 
      "firstName": "Jonathan"
    }, 
    "title": "Gulliver's Travels"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Steinbeck", 
      "firstName": "John"
    }, 
    "title": "The Grapes of Wrath"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Selby", 
      "firstName": "Hubert"
    }, 
    "title": "Requiem for a Dream"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Shakespeare", 
      "firstName": "William"
    }, 
    "title": "Henry IV (Part 2)"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Wilkinson", 
      "firstName": "Toby"
    }, 
    "title": "The Rise and Fall of Ancient Egypt"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Wouk", 
      "firstName": "Herman"
    }, 
    "title": "The Caine Mutiny"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Wyndham", 
      "firstName": "John"
    }, 
    "title": "The Day of the Triffids"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Wright", 
      "firstName": "Steven"
    }, 
    "title": "Steven Wright Humor"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Wells", 
      "firstName": "H.G."
    }, 
    "title": "The Time Machine and the Invisible Man"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Wong", 
      "firstName": "David"
    }, 
    "title": "John Dies at the End"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "White", 
      "firstName": "Betty"
    }, 
    "title": "If You Ask Me"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Weiner", 
      "firstName": "Jennifer"
    }, 
    "title": "In Her Shoes"
  }, 
  {
    "series": "Uglies 04", 
    "author": {
      "lastName": "Westerfeld", 
      "firstName": "Scott"
    }, 
    "title": "Extras"
  }, 
  {
    "series": "Black Dagger Brotherhood 07", 
    "author": {
      "lastName": "Ward", 
      "firstName": "J.R."
    }, 
    "title": "Lover Avenged"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Wolfe", 
      "firstName": "Tom"
    }, 
    "title": "The Right Stuff"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Walls", 
      "firstName": "Jeannette"
    }, 
    "title": "Half Broke Horses"
  }, 
  {
    "series": "6", 
    "author": {
      "lastName": "Wilder", 
      "firstName": "Laura Ingalls"
    }, 
    "title": "The Long Winter"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Woodward", 
      "firstName": "Bob"
    }, 
    "title": "Obama's Wars"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Wharton", 
      "firstName": "Edith"
    }, 
    "title": "The House of Mirth"
  }, 
  {
    "series": "Night Angel Trilogy 03", 
    "author": {
      "lastName": "Weeks", 
      "firstName": "Brent"
    }, 
    "title": "Beyond the Shadows"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Warren", 
      "firstName": "Robert Penn"
    }, 
    "title": "All the King's Men"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Wyndham", 
      "firstName": "John"
    }, 
    "title": "The Chrysalids"
  }, 
  {
    "series": "Black Dagger Brotherhood 03", 
    "author": {
      "lastName": "Ward", 
      "firstName": "J.R."
    }, 
    "title": "Lover Awakened"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Wallace", 
      "firstName": "David Foster"
    }, 
    "title": "Consider the Lobster and Other Essays"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Woodward", 
      "firstName": "Bob"
    }, 
    "title": "Plan of Attack"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Whitman", 
      "firstName": "Walt"
    }, 
    "title": "Leaves of Grass"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Wright", 
      "firstName": "Richard"
    }, 
    "title": "Native Son"
  }, 
  {
    "series": "9", 
    "author": {
      "lastName": "Wilder", 
      "firstName": "Laura Ingalls"
    }, 
    "title": "The First Four Years"
  }, 
  {
    "series": "4", 
    "author": {
      "lastName": "Wilder", 
      "firstName": "Laura Ingalls"
    }, 
    "title": "On the Banks of Plum Creek"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Zusak", 
      "firstName": "Markus"
    }, 
    "title": "The Book Thief"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Wolfe", 
      "firstName": "Tom"
    }, 
    "title": "Bonfire of the Vanities"
  }, 
  {
    "series": "Night Angel Trilogy 01", 
    "author": {
      "lastName": "Weeks", 
      "firstName": "Brent"
    }, 
    "title": "The Way of Shadows"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Zuckoff", 
      "firstName": "Mitchell"
    }, 
    "title": "Lost in Shangri-La"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Wallace", 
      "firstName": "David Foster"
    }, 
    "title": "Brief Interviews With Hideous Men"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Wilde", 
      "firstName": "Oscar"
    }, 
    "title": "The Picture of Dorian Gray"
  }, 
  {
    "series": "Black Dagger Brotherhood 01", 
    "author": {
      "lastName": "Ward", 
      "firstName": "J.R."
    }, 
    "title": "Dark Lover"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Wells", 
      "firstName": "H.G."
    }, 
    "title": "The War of the Worlds"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Wasdin", 
      "firstName": "Howard"
    }, 
    "title": "SEAL Team Six"
  }, 
  {
    "series": "Black Dagger Brotherhood 05", 
    "author": {
      "lastName": "Ward", 
      "firstName": "J.R."
    }, 
    "title": "Lover Unbound"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Wilber", 
      "firstName": "Del Quentin"
    }, 
    "title": "Rawhide Down"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Wilmore", 
      "firstName": "Larry"
    }, 
    "title": "I'd Rather We Got Casinos, And Other Black Thoughts"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Wharton", 
      "firstName": "Edith"
    }, 
    "title": "The Age of Innocence"
  }, 
  {
    "series": "Uglies 02", 
    "author": {
      "lastName": "Westerfeld", 
      "firstName": "Scott"
    }, 
    "title": "Pretties"
  }, 
  {
    "series": "Black Dagger Brotherhood 06", 
    "author": {
      "lastName": "Ward", 
      "firstName": "J.R."
    }, 
    "title": "Lover Enshrined"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Zelazny", 
      "firstName": "Roger"
    }, 
    "title": "Lord of Light"
  }, 
  {
    "series": "Night Angel Trilogy 02", 
    "author": {
      "lastName": "Weeks", 
      "firstName": "Brent"
    }, 
    "title": "Shadow's Edge"
  }, 
  {
    "series": "5", 
    "author": {
      "lastName": "Wilder", 
      "firstName": "Laura Ingalls"
    }, 
    "title": "By the Shores of Silver Lake"
  }, 
  {
    "series": "2", 
    "author": {
      "lastName": "Wilder", 
      "firstName": "Laura Ingalls"
    }, 
    "title": "Little House on the Prairie"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Walker", 
      "firstName": "Alice"
    }, 
    "title": "The Color Purple"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Walls", 
      "firstName": "Jeannette"
    }, 
    "title": "The Glass Castle"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Zafon", 
      "firstName": "Carlos Ruiz"
    }, 
    "title": "The Angel's Game"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "White", 
      "firstName": "T.H."
    }, 
    "title": "The Once and Future King"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Wiesel", 
      "firstName": "Elie"
    }, 
    "title": "Night"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Wharton", 
      "firstName": "Edith"
    }, 
    "title": "Ethan Frome"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Weir", 
      "firstName": "Alison"
    }, 
    "title": "The Life of Elizabeth I"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Weisman", 
      "firstName": "Alan"
    }, 
    "title": "The World Without Us"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Woodward", 
      "firstName": "Bob"
    }, 
    "title": "Bush At War"
  }, 
  {
    "series": "8", 
    "author": {
      "lastName": "Wilder", 
      "firstName": "Laura Ingalls"
    }, 
    "title": "These Happy Golden Years"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Welsh", 
      "firstName": "Irvine"
    }, 
    "title": "Trainspotting"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Zafon", 
      "firstName": "Carlos Ruiz"
    }, 
    "title": "The Shadow of the Wind"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Weir", 
      "firstName": "Alison"
    }, 
    "title": "The Lady in the Tower"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Wheaton", 
      "firstName": "Wil"
    }, 
    "title": "Just a Geek"
  }, 
  {
    "series": "7", 
    "author": {
      "lastName": "Wilder", 
      "firstName": "Laura Ingalls"
    }, 
    "title": "Little Town on the Prairie"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Weir", 
      "firstName": "Alison"
    }, 
    "title": "The Six Wives of Henry VIII"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Wilson", 
      "firstName": "Robert Charles"
    }, 
    "title": "Spin"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Young", 
      "firstName": "William"
    }, 
    "title": "The Shack"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Yates", 
      "firstName": "Richard"
    }, 
    "title": "Revolutionary Road"
  }, 
  {
    "series": "Black Dagger Brotherhood 09", 
    "author": {
      "lastName": "Ward", 
      "firstName": "J.R."
    }, 
    "title": "Lover Unleashed"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Weiner", 
      "firstName": "Jennifer"
    }, 
    "title": "Good In Bed"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Weiner", 
      "firstName": "Jennifer"
    }, 
    "title": "Little Earthquakes"
  }, 
  {
    "series": "1", 
    "author": {
      "lastName": "Wilder", 
      "firstName": "Laura Ingalls"
    }, 
    "title": "Little House Big Woods"
  }, 
  {
    "series": "Book of the New Sun 01", 
    "author": {
      "lastName": "Wolfe", 
      "firstName": "Gene"
    }, 
    "title": "Shadow & Claw"
  }, 
  {
    "series": "3", 
    "author": {
      "lastName": "Wilder", 
      "firstName": "Laura Ingalls"
    }, 
    "title": "Farmer Boy"
  }, 
  {
    "series": "Black Dagger Brotherhood 04", 
    "author": {
      "lastName": "Ward", 
      "firstName": "J.R."
    }, 
    "title": "Lover Revealed"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Winchester", 
      "firstName": "Simon"
    }, 
    "title": "The Professor and the Madman"
  }, 
  {
    "series": "Uglies 01", 
    "author": {
      "lastName": "Westerfeld", 
      "firstName": "Scott"
    }, 
    "title": "Uglies"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Wallace", 
      "firstName": "David Foster"
    }, 
    "title": "Infinite Jest"
  }, 
  {
    "series": "Black Dagger Brotherhood 02", 
    "author": {
      "lastName": "Ward", 
      "firstName": "J.R."
    }, 
    "title": "Lover Eternal"
  }, 
  {
    "series": "Uglies 03", 
    "author": {
      "lastName": "Westerfeld", 
      "firstName": "Scott"
    }, 
    "title": "Specials"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Zinn", 
      "firstName": "Howard"
    }, 
    "title": "A People's History of the United States"
  }, 
  {
    "series": "Book of the New Sun 02", 
    "author": {
      "lastName": "Wolfe", 
      "firstName": "Gene"
    }, 
    "title": "Sword and Citadel"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Woolf", 
      "firstName": "Virginia"
    }, 
    "title": "To the Lighthouse"
  }, 
  {
    "series": "Black Dagger Brotherhood 08", 
    "author": {
      "lastName": "Ward", 
      "firstName": "J.R."
    }, 
    "title": "Lover Mine"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Woolf", 
      "firstName": "Virginia"
    }, 
    "title": "Mrs. Dalloway"
  }, 
  {
    "series": "01", 
    "author": {
      "lastName": "Evans", 
      "firstName": "Richard J."
    }, 
    "title": "The Coming of the Third Reich"
  }, 
  {
    "series": "Stephanie Plum 12", 
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Twelve Sharp"
  }, 
  {
    "series": "Malazan Book of the Fallen 01", 
    "author": {
      "lastName": "Erikson", 
      "firstName": "Steven"
    }, 
    "title": "Gardens of the Moon"
  }, 
  {
    "series": "Malloreon 02", 
    "author": {
      "lastName": "Eddings", 
      "firstName": "David"
    }, 
    "title": "King of The Murgos"
  }, 
  {
    "series": "Stephanie Plum 09", 
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "To the Nines"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Ehrenreich", 
      "firstName": "Barbara"
    }, 
    "title": "Bright-Sided"
  }, 
  {
    "series": "Stephanie Plum 14", 
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Fearless Fourteen"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Eggers", 
      "firstName": "Dave"
    }, 
    "title": "What is the What"
  }, 
  {
    "series": "Stephanie Plum 10", 
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Ten Big Ones"
  }, 
  {
    "series": "Malazan Book of the Fallen 05", 
    "author": {
      "lastName": "Erikson", 
      "firstName": "Steven"
    }, 
    "title": "Midnight Tides"
  }, 
  {
    "series": "Belgariad 04", 
    "author": {
      "lastName": "Eddings", 
      "firstName": "David"
    }, 
    "title": "Castle of Wizardry"
  }, 
  {
    "series": "Stephanie Plum 01", 
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "One for the Money"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Foul Play"
  }, 
  {
    "series": "Malloreon 04", 
    "author": {
      "lastName": "Eddings", 
      "firstName": "David"
    }, 
    "title": "Sorceress of Darshiva"
  }, 
  {
    "series": "Stephanie Plum 02", 
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Two for the Dough"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Plum Lucky"
  }, 
  {
    "series": "Stephanie Plum 13", 
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Lean Mean Thirteen"
  }, 
  {
    "series": "Malazan Book of the Fallen 02", 
    "author": {
      "lastName": "Erikson", 
      "firstName": "Steven"
    }, 
    "title": "Deadhouse Gates"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Eco", 
      "firstName": "Umberto"
    }, 
    "title": "Foucault's Pendulum"
  }, 
  {
    "series": "Malloreon 01", 
    "author": {
      "lastName": "Eddings", 
      "firstName": "David"
    }, 
    "title": "Guardians of the West"
  }, 
  {
    "series": "Belgariad 03", 
    "author": {
      "lastName": "Eddings", 
      "firstName": "David"
    }, 
    "title": "Magician's Gambit"
  }, 
  {
    "series": "Stephanie Plum 04", 
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Four to Score"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Egan", 
      "firstName": "Timothy"
    }, 
    "title": "The Worst Hard Time"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Ellroy", 
      "firstName": "James"
    }, 
    "title": "The Big Nowhere"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Edwards", 
      "firstName": "Kim"
    }, 
    "title": "The Memory Keeper's Daughter"
  }, 
  {
    "series": "Malloreon 03", 
    "author": {
      "lastName": "Eddings", 
      "firstName": "David"
    }, 
    "title": "Demon Lord of Karanda"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Ellis", 
      "firstName": "Bret Easton"
    }, 
    "title": "Less Than Zero"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Ellroy", 
      "firstName": "James"
    }, 
    "title": "L.A. Confidential"
  }, 
  {
    "series": "Malazan Book of the Fallen 03", 
    "author": {
      "lastName": "Erikson", 
      "firstName": "Steven"
    }, 
    "title": "Memories of Ice"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Eagleton", 
      "firstName": "Terry"
    }, 
    "title": "Why Marx Was Right"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Ellis", 
      "firstName": "Bret Easton"
    }, 
    "title": "Imperial Bedrooms"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Plum Spooky"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Eggers", 
      "firstName": "Dave"
    }, 
    "title": "You Shall Know Our Velocity"
  }, 
  {
    "series": "Stephanie Plum 11", 
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Eleven on Top"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Eugenides", 
      "firstName": "Jeffrey"
    }, 
    "title": "Middlesex"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Visions of Sugar Plums"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Ellis", 
      "firstName": "Bret Easton"
    }, 
    "title": "Glamorama"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Ellis", 
      "firstName": "Bret Easton"
    }, 
    "title": "American Psycho"
  }, 
  {
    "series": "Belgariad 05", 
    "author": {
      "lastName": "Eddings", 
      "firstName": "David"
    }, 
    "title": "Enchanter's End Game"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Ellroy", 
      "firstName": "James"
    }, 
    "title": "White Jazz"
  }, 
  {
    "series": "03", 
    "author": {
      "lastName": "Evans", 
      "firstName": "Richard J."
    }, 
    "title": "The Third Reich at War"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Emerson", 
      "firstName": "Ralph Waldo"
    }, 
    "title": "Essays and Poems"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Eliot", 
      "firstName": "T.S."
    }, 
    "title": "Waste Land and Other Poems"
  }, 
  {
    "series": "Stephanie Plum 05", 
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "High Five"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Ellroy", 
      "firstName": "James"
    }, 
    "title": "American Tabloid"
  }, 
  {
    "series": "Malazan Book of the Fallen 09", 
    "author": {
      "lastName": "Erikson", 
      "firstName": "Steven"
    }, 
    "title": "Dust of Dreams"
  }, 
  {
    "series": "Stephanie Plum 07", 
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Seven Up"
  }, 
  {
    "series": "Stephanie Plum 08", 
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Hard Eight"
  }, 
  {
    "series": "Stephanie Plum 16", 
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Sizzling Sixteen"
  }, 
  {
    "series": "Malazan Book of the Fallen 08", 
    "author": {
      "lastName": "Erikson", 
      "firstName": "Steven"
    }, 
    "title": "Toll the Hounds"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Eco", 
      "firstName": "Umberto"
    }, 
    "title": "The Name of the Rose"
  }, 
  {
    "series": "Malazan Book of the Fallen 10", 
    "author": {
      "lastName": "Erikson", 
      "firstName": "Steven"
    }, 
    "title": "The Crippled God"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Egan", 
      "firstName": "Jennifer"
    }, 
    "title": "A Visit from the Goon Squad"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Plum Lovin'"
  }, 
  {
    "series": "Malazan Book of the Fallen 06", 
    "author": {
      "lastName": "Erikson", 
      "firstName": "Steven"
    }, 
    "title": "The Bonehunters"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Eggers", 
      "firstName": "Dave"
    }, 
    "title": "Zeitoun"
  }, 
  {
    "series": "02", 
    "author": {
      "lastName": "Evans", 
      "firstName": "Richard J."
    }, 
    "title": "The Third Reich in Power"
  }, 
  {
    "series": "Belgariad 02", 
    "author": {
      "lastName": "Eddings", 
      "firstName": "David"
    }, 
    "title": "Queen of Sorcery"
  }, 
  {
    "series": "Malloreon 05", 
    "author": {
      "lastName": "Eddings", 
      "firstName": "David"
    }, 
    "title": "The Seeress of Kell"
  }, 
  {
    "series": "Malazan Book of the Fallen 07", 
    "author": {
      "lastName": "Erikson", 
      "firstName": "Steven"
    }, 
    "title": "Reaper's Gale"
  }, 
  {
    "series": "Stephanie Plum 03", 
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Three to Get Deadly"
  }, 
  {
    "series": "Stephanie Plum 15", 
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Finger Lickin' Fifteen"
  }, 
  {
    "series": "Belgariad 01", 
    "author": {
      "lastName": "Eddings", 
      "firstName": "David"
    }, 
    "title": "Pawn of Prophecy"
  }, 
  {
    "series": "", 
    "author": {
      "lastName": "Ellroy", 
      "firstName": "James"
    }, 
    "title": "The Black Dahlia"
  }, 
  {
    "series": "Malazan Book of the Fallen 04", 
    "author": {
      "lastName": "Erikson", 
      "firstName": "Steven"
    }, 
    "title": "House of Chains"
  }, 
  {
    "series": "Stephanie Plum 06", 
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Hot Six"
  }
];
