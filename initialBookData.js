const initialBookData = [
  {
    "author": {
      "lastName": "Tyler", 
      "firstName": "Steven"
    }, 
    "title": "Does the Noise in My Head Bother You"
  }, 
  {
    "author": {
      "lastName": "Vonnegut", 
      "firstName": "Kurt"
    }, 
    "title": "Breakfast of Champions"
  }, 
  {
    "author": {
      "lastName": "Thackeray", 
      "firstName": "William Makepeace"
    }, 
    "title": "Vanity Fair"
  }, 
  {
    "author": {
      "lastName": "Verne", 
      "firstName": "Jules"
    }, 
    "title": "Collected Works of Jules Verne"
  }, 
  {
    "author": {
      "lastName": "Vogler", 
      "firstName": "Christopher"
    }, 
    "title": "The Writer's Journey"
  }, 
  {
    "author": {
      "lastName": "Verne", 
      "firstName": "Jules"
    }, 
    "title": "Twenty Thousand Leagues Under the Sea"
  }, 
  {
    "author": {
      "lastName": "Vonnegut", 
      "firstName": "Kurt"
    }, 
    "title": "Slaughterhouse Five"
  }, 
  {
    "author": {
      "lastName": "Taubes", 
      "firstName": "Gary"
    }, 
    "title": "Good Calories, Bad Calories"
  }, 
  {
    "author": {
      "lastName": "Twain", 
      "firstName": "Mark"
    }, 
    "title": "A Connecticut Yankee in King Arthur's Court"
  }, 
  {
    "author": {
      "lastName": "Vonnegut", 
      "firstName": "Kurt"
    }, 
    "title": "Deadeye Dick"
  }, 
  {
    "author": {
      "lastName": "Thompson", 
      "firstName": "Hunter S."
    }, 
    "title": "The Great Shark Hunt"
  }, 
  {
    "author": {
      "lastName": "Vonnegut", 
      "firstName": "Kurt"
    }, 
    "title": "Cat's Cradle"
  }, 
  {
    "author": {
      "lastName": "Tolkien", 
      "firstName": "J.R.R."
    }, 
    "title": "The Silmarillion"
  }, 
  {
    "author": {
      "lastName": "Toole", 
      "firstName": "John Kennedy"
    }, 
    "title": "A Confederacy of Dunces"
  }, 
  {
    "author": {
      "lastName": "Tolle", 
      "firstName": "Eckhart"
    }, 
    "title": "A New Earth"
  }, 
  {
    "author": {
      "lastName": "Tobias", 
      "firstName": "Ronald"
    }, 
    "title": "20 Master Plots and How To Build Them"
  }, 
  {
    "author": {
      "lastName": "Tan", 
      "firstName": "Amy"
    }, 
    "title": "The Bonesetter's Daughter"
  }, 
  {
    "author": {
      "lastName": "Thompson", 
      "firstName": "Hunter S."
    }, 
    "title": "The Rum Diary"
  }, 
  {
    "author": {
      "lastName": "Tan", 
      "firstName": "Amy"
    }, 
    "title": "The Joy Luck Club"
  }, 
  {
    "author": {
      "lastName": "Tracy", 
      "firstName": "P.J."
    }, 
    "title": "Live Bait"
  }, 
  {
    "author": {
      "lastName": "Tzu", 
      "firstName": "Sun"
    }, 
    "title": "The Art of War"
  }, 
  {
    "author": {
      "lastName": "Vonnegut", 
      "firstName": "Kurt"
    }, 
    "title": "Mother Night"
  }, 
  {
    "author": {
      "lastName": "Twain", 
      "firstName": "Mark"
    }, 
    "title": "The Adventures of Huckleberry Finn"
  }, 
  {
    "author": {
      "lastName": "Thoreau", 
      "firstName": "Henry David"
    }, 
    "title": "Walden"
  }, 
  {
    "author": {
      "lastName": "Updike", 
      "firstName": "John"
    }, 
    "title": "Rabbit at Rest"
  }, 
  {
    "author": {
      "lastName": "Updike", 
      "firstName": "John"
    }, 
    "title": "Rabbit Redux"
  }, 
  {
    "author": {
      "lastName": "Thompson", 
      "firstName": "Hunter S."
    }, 
    "title": "Fear and Loathing in Las Vegas"
  }, 
  {
    "author": {
      "lastName": "", 
      "firstName": "Virgil"
    }, 
    "title": "The Aeneid"
  }, 
  {
    "author": {
      "lastName": "Tolkien", 
      "firstName": "J.R.R."
    }, 
    "title": "The Children of Hurin"
  }, 
  {
    "author": {
      "lastName": "Verne", 
      "firstName": "Jules"
    }, 
    "title": "A Journey to the Center of the Earth"
  }, 
  {
    "author": {
      "lastName": "Tolkien", 
      "firstName": "J.R.R."
    }, 
    "title": "The Hobbit"
  }, 
  {
    "author": {
      "lastName": "Vonnegut", 
      "firstName": "Kurt"
    }, 
    "title": "Galapagos"
  }, 
  {
    "author": {
      "lastName": "Updike", 
      "firstName": "John"
    }, 
    "title": "Rabbit, Run"
  }, 
  {
    "author": {
      "lastName": "Updike", 
      "firstName": "John"
    }, 
    "title": "Rabbit is Rich"
  }, 
  {
    "author": {
      "lastName": "Tracy", 
      "firstName": "P.J."
    }, 
    "title": "Want to Play"
  }, 
  {
    "author": {
      "lastName": "Taubes", 
      "firstName": "Gary"
    }, 
    "title": "Why We Get Fat and What To Do About It"
  }, 
  {
    "author": {
      "lastName": "Tolkien", 
      "firstName": "J.R.R."
    }, 
    "title": "The Return of the King"
  }, 
  {
    "author": {
      "lastName": "Tarkington", 
      "firstName": "Booth"
    }, 
    "title": "The Magnificent Ambersons"
  }, 
  {
    "author": {
      "lastName": "Tracy", 
      "firstName": "P.J."
    }, 
    "title": "Dead Run"
  }, 
  {
    "author": {
      "lastName": "Vonnegut", 
      "firstName": "Kurt"
    }, 
    "title": "Player Piano"
  }, 
  {
    "author": {
      "lastName": "Vonnegut", 
      "firstName": "Kurt"
    }, 
    "title": "A Man Without a Country"
  }, 
  {
    "author": {
      "lastName": "Vinge", 
      "firstName": "Vernor"
    }, 
    "title": "A Fire Upon the Deep"
  }, 
  {
    "author": {
      "lastName": "Truby", 
      "firstName": "John"
    }, 
    "title": "The Anatomy of Story"
  }, 
  {
    "author": {
      "lastName": "", 
      "firstName": "Voltaire"
    }, 
    "title": "Candide"
  }, 
  {
    "author": {
      "lastName": "Twain", 
      "firstName": "Mark"
    }, 
    "title": "The Adventures of Tom Sawyer"
  }, 
  {
    "author": {
      "lastName": "Thorne", 
      "firstName": "David"
    }, 
    "title": "The Internet is a Playground"
  }, 
  {
    "author": {
      "lastName": "Taibbi", 
      "firstName": "Matt"
    }, 
    "title": "The Great Derangement"
  }, 
  {
    "author": {
      "lastName": "Vinge", 
      "firstName": "Vernor"
    }, 
    "title": "A Deepness in the Sky"
  }, 
  {
    "author": {
      "lastName": "Tolkien", 
      "firstName": "J.R.R."
    }, 
    "title": "The Two Towers"
  }, 
  {
    "author": {
      "lastName": "Verghese", 
      "firstName": "Abraham"
    }, 
    "title": "Cutting for Stone"
  }, 
  {
    "author": {
      "lastName": "Twain", 
      "firstName": "Mark"
    }, 
    "title": "The Prince and the Pauper"
  }, 
  {
    "author": {
      "lastName": "Twain", 
      "firstName": "Mark"
    }, 
    "title": "Autobiography of Mark Twain"
  }, 
  {
    "author": {
      "lastName": "Taibbi", 
      "firstName": "Matt"
    }, 
    "title": "Griftopia"
  }, 
  {
    "author": {
      "lastName": "Tolkien", 
      "firstName": "J.R.R."
    }, 
    "title": "The Fellowship of the Ring"
  }, 
  {
    "author": {
      "lastName": "Tracy", 
      "firstName": "P.J."
    }, 
    "title": "Snow Blind"
  }, 
  {
    "author": {
      "lastName": "Thompson", 
      "firstName": "Hunter S."
    }, 
    "title": "Hell's Angels"
  }, 
  {
    "author": {
      "lastName": "Tolle", 
      "firstName": "Eckhart"
    }, 
    "title": "The Power of Now"
  }, 
  {
    "author": {
      "lastName": "Reichs", 
      "firstName": "Kathy"
    }, 
    "title": "Deadly Decisions"
  }, 
  {
    "author": {
      "lastName": "Rutherfurd", 
      "firstName": "Edward"
    }, 
    "title": "New York"
  }, 
  {
    "author": {
      "lastName": "Riordan", 
      "firstName": "Rick"
    }, 
    "title": "The Sea of Monsters"
  }, 
  {
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Imitation in Death"
  }, 
  {
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Ceremony in Death"
  }, 
  {
    "author": {
      "lastName": "Rand", 
      "firstName": "Ayn"
    }, 
    "title": "Atlas Shrugged"
  }, 
  {
    "author": {
      "lastName": "Quinn", 
      "firstName": "Daniel"
    }, 
    "title": "Ishmael"
  }, 
  {
    "author": {
      "lastName": "", 
      "firstName": "Religion"
    }, 
    "title": "The Quran"
  }, 
  {
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Fantasy in Death"
  }, 
  {
    "author": {
      "lastName": "Reichs", 
      "firstName": "Kathy"
    }, 
    "title": "Fatal Voyage"
  }, 
  {
    "author": {
      "lastName": "Riordan", 
      "firstName": "Rick"
    }, 
    "title": "The Last Olympian"
  }, 
  {
    "author": {
      "lastName": "Roth", 
      "firstName": "Philip"
    }, 
    "title": "American Pastoral"
  }, 
  {
    "author": {
      "lastName": "Rossi", 
      "firstName": "Portia de"
    }, 
    "title": "Unbearable Lightness, A Story of Loss and Gain"
  }, 
  {
    "author": {
      "lastName": "Rowling", 
      "firstName": "J.K."
    }, 
    "title": "Blood Prince"
  }, 
  {
    "author": {
      "lastName": "Rittenberg", 
      "firstName": "Ann"
    }, 
    "title": "Your First Novel"
  }, 
  {
    "author": {
      "lastName": "Reichs", 
      "firstName": "Kathy"
    }, 
    "title": "Grave Secrets"
  }, 
  {
    "author": {
      "lastName": "Rice", 
      "firstName": "Anne"
    }, 
    "title": "Blackwood Farm"
  }, 
  {
    "author": {
      "lastName": "Rand", 
      "firstName": "Ayn"
    }, 
    "title": "Anthem"
  }, 
  {
    "author": {
      "lastName": "Remarque", 
      "firstName": "Erich Maria"
    }, 
    "title": "All Quiet on the Western Front"
  }, 
  {
    "author": {
      "lastName": "Rice", 
      "firstName": "Anne"
    }, 
    "title": "The Queen of the Damned"
  }, 
  {
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Visions in Death"
  }, 
  {
    "author": {
      "lastName": "Reichs", 
      "firstName": "Kathy"
    }, 
    "title": "Deja Dead"
  }, 
  {
    "author": {
      "lastName": "Rowling", 
      "firstName": "J.K."
    }, 
    "title": "Harry Potter and the Sorcerer's Stone"
  }, 
  {
    "author": {
      "lastName": "Riordan", 
      "firstName": "Rick"
    }, 
    "title": "Throne of Fire"
  }, 
  {
    "author": {
      "lastName": "Roach", 
      "firstName": "Mary"
    }, 
    "title": "Packing for Mars"
  }, 
  {
    "author": {
      "lastName": "Rowling", 
      "firstName": "J.K."
    }, 
    "title": "Harry Potter and the Order of the Phoenix"
  }, 
  {
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Divided in Death"
  }, 
  {
    "author": {
      "lastName": "Rowling", 
      "firstName": "J.K."
    }, 
    "title": "Harry Potter and the Deathly Hallows"
  }, 
  {
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Innocent in Death"
  }, 
  {
    "author": {
      "lastName": "Rice", 
      "firstName": "Anne"
    }, 
    "title": "Blood and Gold"
  }, 
  {
    "author": {
      "lastName": "Rutherfurd", 
      "firstName": "Edward"
    }, 
    "title": "London"
  }, 
  {
    "author": {
      "lastName": "Rumsfeld", 
      "firstName": "Donald"
    }, 
    "title": "Known and Unknown"
  }, 
  {
    "author": {
      "lastName": "Rushdie", 
      "firstName": "Salman"
    }, 
    "title": "The Satanic Verses"
  }, 
  {
    "author": {
      "lastName": "Riordan", 
      "firstName": "Rick"
    }, 
    "title": "The Titan's Curse"
  }, 
  {
    "author": {
      "lastName": "Riordan", 
      "firstName": "Rick"
    }, 
    "title": "The Red Pyramid"
  }, 
  {
    "author": {
      "lastName": "Rice", 
      "firstName": "Anne"
    }, 
    "title": "The Vampire Armand"
  }, 
  {
    "author": {
      "lastName": "Reichs", 
      "firstName": "Kathy"
    }, 
    "title": "Bones to Ashes"
  }, 
  {
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Glory in Death"
  }, 
  {
    "author": {
      "lastName": "Rutherfurd", 
      "firstName": "Edward"
    }, 
    "title": "The Forest"
  }, 
  {
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Rapture in Death"
  }, 
  {
    "author": {
      "lastName": "Reichs", 
      "firstName": "Kathy"
    }, 
    "title": "206 Bones"
  }, 
  {
    "author": {
      "lastName": "Richards", 
      "firstName": "Keith"
    }, 
    "title": "Life"
  }, 
  {
    "author": {
      "lastName": "Roy", 
      "firstName": "Arundhati"
    }, 
    "title": "The God of Small Things"
  }, 
  {
    "author": {
      "lastName": "Riordan", 
      "firstName": "Rick"
    }, 
    "title": "The Lightning Thief"
  }, 
  {
    "author": {
      "lastName": "Reichs", 
      "firstName": "Kathy"
    }, 
    "title": "Bare Bones"
  }, 
  {
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Indulgence in Death"
  }, 
  {
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Seduction in Death"
  }, 
  {
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Treachery in Death"
  }, 
  {
    "author": {
      "lastName": "Roach", 
      "firstName": "Mary"
    }, 
    "title": "Stiff, The Curious Lives of Human Cadavers"
  }, 
  {
    "author": {
      "lastName": "Rath", 
      "firstName": "Tom"
    }, 
    "title": "StrengthsFinder 2.0"
  }, 
  {
    "author": {
      "lastName": "Reichs", 
      "firstName": "Kathy"
    }, 
    "title": "Virals"
  }, 
  {
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Purity in Death"
  }, 
  {
    "author": {
      "lastName": "Roth", 
      "firstName": "Philip"
    }, 
    "title": "Portnoy's Complaint"
  }, 
  {
    "author": {
      "lastName": "Reichs", 
      "firstName": "Kathy"
    }, 
    "title": "Death Du Jour"
  }, 
  {
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Loyalty in Death"
  }, 
  {
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Witness in Death"
  }, 
  {
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Promises in Death"
  }, 
  {
    "author": {
      "lastName": "Rice", 
      "firstName": "Anne"
    }, 
    "title": "Merrick"
  }, 
  {
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Born in Death"
  }, 
  {
    "author": {
      "lastName": "Rice", 
      "firstName": "Anne"
    }, 
    "title": "The Tale of the Body Thief"
  }, 
  {
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Naked in Death"
  }, 
  {
    "author": {
      "lastName": "Rand", 
      "firstName": "Ayn"
    }, 
    "title": "The Fountainhead"
  }, 
  {
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Strangers in Death"
  }, 
  {
    "author": {
      "lastName": "Roth", 
      "firstName": "Philip"
    }, 
    "title": "The Human Stain"
  }, 
  {
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Salvation in Death"
  }, 
  {
    "author": {
      "lastName": "Ricks", 
      "firstName": "Thomas"
    }, 
    "title": "Fiasco, The American Military Adventure in Iraq"
  }, 
  {
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Holiday in Death"
  }, 
  {
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Betrayal in Death"
  }, 
  {
    "author": {
      "lastName": "Rand", 
      "firstName": "Ayn"
    }, 
    "title": "We the Living"
  }, 
  {
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Portrait in Death"
  }, 
  {
    "author": {
      "lastName": "", 
      "firstName": "Religion"
    }, 
    "title": "The Bible"
  }, 
  {
    "author": {
      "lastName": "Reichs", 
      "firstName": "Kathy"
    }, 
    "title": "Break No Bones"
  }, 
  {
    "author": {
      "lastName": "Rosnay", 
      "firstName": "Tatiana"
    }, 
    "title": "Sarah's Key"
  }, 
  {
    "author": {
      "lastName": "Rice", 
      "firstName": "Anne"
    }, 
    "title": "The Vampire Lestat"
  }, 
  {
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Memory in Death"
  }, 
  {
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Immortal in Death"
  }, 
  {
    "author": {
      "lastName": "Riordan", 
      "firstName": "Rick"
    }, 
    "title": "The Battle of the Labyrinth"
  }, 
  {
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Conspiracy in Death"
  }, 
  {
    "author": {
      "lastName": "Robinson", 
      "firstName": "Marilynne"
    }, 
    "title": "Gilead"
  }, 
  {
    "author": {
      "lastName": "Rice", 
      "firstName": "Anne"
    }, 
    "title": "Blood Canticle"
  }, 
  {
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Reunion in Death"
  }, 
  {
    "author": {
      "lastName": "Rachman", 
      "firstName": "Tom"
    }, 
    "title": "The Imperfectionists"
  }, 
  {
    "author": {
      "lastName": "Reichs", 
      "firstName": "Kathy"
    }, 
    "title": "Spider Bones"
  }, 
  {
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Kindred in Death"
  }, 
  {
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Vengeance in Death"
  }, 
  {
    "author": {
      "lastName": "Rice", 
      "firstName": "Anne"
    }, 
    "title": "Memnoch the Devil"
  }, 
  {
    "author": {
      "lastName": "Reichs", 
      "firstName": "Kathy"
    }, 
    "title": "Devil Bones"
  }, 
  {
    "author": {
      "lastName": "Rutherfurd", 
      "firstName": "Edward"
    }, 
    "title": "Sarum"
  }, 
  {
    "author": {
      "lastName": "Rowling", 
      "firstName": "J.K."
    }, 
    "title": "Harry Potter and the Chamber of Secrets"
  }, 
  {
    "author": {
      "lastName": "Rawles", 
      "firstName": "James Wesley"
    }, 
    "title": "How to Survive the End of the World as We Know It"
  }, 
  {
    "author": {
      "lastName": "Reichs", 
      "firstName": "Kathy"
    }, 
    "title": "Monday Mourning"
  }, 
  {
    "author": {
      "lastName": "Rothfuss", 
      "firstName": "Patrick"
    }, 
    "title": "The Name of the Wind"
  }, 
  {
    "author": {
      "lastName": "Rice", 
      "firstName": "Anne"
    }, 
    "title": "Interview with the Vampire"
  }, 
  {
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Origin in Death"
  }, 
  {
    "author": {
      "lastName": "Reichs", 
      "firstName": "Kathy"
    }, 
    "title": "Cross Bones"
  }, 
  {
    "author": {
      "lastName": "Riordan", 
      "firstName": "Rick"
    }, 
    "title": "The Lost Hero"
  }, 
  {
    "author": {
      "lastName": "Rowling", 
      "firstName": "J.K."
    }, 
    "title": "Harry Potter and the Prisoner of Azkaban"
  }, 
  {
    "author": {
      "lastName": "Rowling", 
      "firstName": "J.K."
    }, 
    "title": "Harry Potter and the Goblet Of Fire"
  }, 
  {
    "author": {
      "lastName": "Rothfuss", 
      "firstName": "Patrick"
    }, 
    "title": "The Wise Man's Fear"
  }, 
  {
    "author": {
      "lastName": "Rowling", 
      "firstName": "J.K."
    }, 
    "title": "The Tales of Beedle the Bard"
  }, 
  {
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Survivor in Death"
  }, 
  {
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Creation in Death"
  }, 
  {
    "author": {
      "lastName": "Robb", 
      "firstName": "J.D."
    }, 
    "title": "Judgment in Death"
  }, 
  {
    "author": {
      "lastName": "Rand", 
      "firstName": "Ayn"
    }, 
    "title": "The Virtue of Selfishness"
  }, 
  {
    "author": {
      "lastName": "Alexander", 
      "firstName": "Lloyd"
    }, 
    "title": "The High King"
  }, 
  {
    "author": {
      "lastName": "", 
      "firstName": "Aesop"
    }, 
    "title": "Aesop's Fables"
  }, 
  {
    "author": {
      "lastName": "Adams", 
      "firstName": "Douglas"
    }, 
    "title": "Time of the Soul"
  }, 
  {
    "author": {
      "lastName": "Ambrose", 
      "firstName": "Stephen E."
    }, 
    "title": "Citizen Soldiers"
  }, 
  {
    "author": {
      "lastName": "Alexander", 
      "firstName": "Lloyd"
    }, 
    "title": "Taran Wanderer"
  }, 
  {
    "author": {
      "lastName": "Agee", 
      "firstName": "James"
    }, 
    "title": "A Death In The Family"
  }, 
  {
    "author": {
      "lastName": "Anthony", 
      "firstName": "Piers"
    }, 
    "title": "Bearing an Hourglass"
  }, 
  {
    "author": {
      "lastName": "Auel", 
      "firstName": "Jean M."
    }, 
    "title": "The Shelters of Stone"
  }, 
  {
    "author": {
      "lastName": "Achebe", 
      "firstName": "Chinua"
    }, 
    "title": "Things Fall Apart"
  }, 
  {
    "author": {
      "lastName": "Anthony", 
      "firstName": "Piers"
    }, 
    "title": "With a Tangled Skein"
  }, 
  {
    "author": {
      "lastName": "Anthony", 
      "firstName": "Piers"
    }, 
    "title": "Wielding a Red Sword"
  }, 
  {
    "author": {
      "lastName": "Austen", 
      "firstName": "Jane"
    }, 
    "title": "Sense and Sensibility"
  }, 
  {
    "author": {
      "lastName": "Anthony", 
      "firstName": "Piers"
    }, 
    "title": "Under a Velvet Cloak"
  }, 
  {
    "author": {
      "lastName": "Atwood", 
      "firstName": "Margaret"
    }, 
    "title": "Alias Grace"
  }, 
  {
    "author": {
      "lastName": "Albom", 
      "firstName": "Mitch"
    }, 
    "title": "The Five People You Meet In Heaven"
  }, 
  {
    "author": {
      "lastName": "Atwood", 
      "firstName": "Margaret"
    }, 
    "title": "The Handmaid's Tale"
  }, 
  {
    "author": {
      "lastName": "Abbot", 
      "firstName": "Edwin"
    }, 
    "title": "Flatland"
  }, 
  {
    "author": {
      "lastName": "Abercrombie", 
      "firstName": "Joe"
    }, 
    "title": "Before They Are Hanged"
  }, 
  {
    "author": {
      "lastName": "Anthony", 
      "firstName": "Piers"
    }, 
    "title": "Being a Green Mother"
  }, 
  {
    "author": {
      "lastName": "Austen", 
      "firstName": "Jane"
    }, 
    "title": "Persuasion"
  }, 
  {
    "author": {
      "lastName": "Adams", 
      "firstName": "Douglas"
    }, 
    "title": "Life, the Universe and Everything"
  }, 
  {
    "author": {
      "lastName": "Ambrose", 
      "firstName": "Hugh"
    }, 
    "title": "The Pacific"
  }, 
  {
    "author": {
      "lastName": "Archer", 
      "firstName": "Jeffrey"
    }, 
    "title": "Kane and Abel"
  }, 
  {
    "author": {
      "lastName": "Asmiov", 
      "firstName": "Isaac"
    }, 
    "title": "Second Foundation"
  }, 
  {
    "author": {
      "lastName": "Albom", 
      "firstName": "Mitch"
    }, 
    "title": "Tuesdays With Morrie"
  }, 
  {
    "author": {
      "lastName": "Austen", 
      "firstName": "Jane"
    }, 
    "title": "Emma"
  }, 
  {
    "author": {
      "lastName": "Austen", 
      "firstName": "Jane"
    }, 
    "title": "Pride and Prejudice"
  }, 
  {
    "author": {
      "lastName": "Alexander", 
      "firstName": "Lloyd"
    }, 
    "title": "The Castle of Llyr"
  }, 
  {
    "author": {
      "lastName": "Atwood", 
      "firstName": "Margaret"
    }, 
    "title": "Oryx and Crake"
  }, 
  {
    "author": {
      "lastName": "Adams", 
      "firstName": "Douglas"
    }, 
    "title": "Mostly Harmless"
  }, 
  {
    "author": {
      "lastName": "Austen", 
      "firstName": "Jane"
    }, 
    "title": "Northanger Abbey"
  }, 
  {
    "author": {
      "lastName": "Auel", 
      "firstName": "Jean M."
    }, 
    "title": "The Land of Painted Caves"
  }, 
  {
    "author": {
      "lastName": "Auel", 
      "firstName": "Jean M."
    }, 
    "title": "The Plains of Passage"
  }, 
  {
    "author": {
      "lastName": "Anthony", 
      "firstName": "Piers"
    }, 
    "title": "And Eternity"
  }, 
  {
    "author": {
      "lastName": "Auel", 
      "firstName": "Jean M."
    }, 
    "title": "The Valley of Horses"
  }, 
  {
    "author": {
      "lastName": "Armstrong", 
      "firstName": "Karen"
    }, 
    "title": "A History of God"
  }, 
  {
    "author": {
      "lastName": "Auel", 
      "firstName": "Jean M."
    }, 
    "title": "The Clan of the Cave Bear"
  }, 
  {
    "author": {
      "lastName": "Alexander", 
      "firstName": "Lloyd"
    }, 
    "title": "The Black Cauldron"
  }, 
  {
    "author": {
      "lastName": "Avery", 
      "firstName": "Denis"
    }, 
    "title": "The Man Who Broke Into Auschwitz"
  }, 
  {
    "author": {
      "lastName": "Adams", 
      "firstName": "Douglas"
    }, 
    "title": "So Long, and Thanks For All the Fish"
  }, 
  {
    "author": {
      "lastName": "Adams", 
      "firstName": "Richard"
    }, 
    "title": "Shardik"
  }, 
  {
    "author": {
      "lastName": "Anthony", 
      "firstName": "Piers"
    }, 
    "title": "For Love of Evil"
  }, 
  {
    "author": {
      "lastName": "Abagnale", 
      "firstName": "Frank W."
    }, 
    "title": "Catch Me If You Can"
  }, 
  {
    "author": {
      "lastName": "Alexander", 
      "firstName": "Lloyd"
    }, 
    "title": "The Book of Three"
  }, 
  {
    "author": {
      "lastName": "Asmiov", 
      "firstName": "Isaac"
    }, 
    "title": "Forward the Foundation"
  }, 
  {
    "author": {
      "lastName": "Austen", 
      "firstName": "Jane"
    }, 
    "title": "Mansfield Park"
  }, 
  {
    "author": {
      "lastName": "Andersen", 
      "firstName": "Hans Christian"
    }, 
    "title": "Fairy Tales"
  }, 
  {
    "author": {
      "lastName": "Adams", 
      "firstName": "Douglas"
    }, 
    "title": "The Hitchhiker's Guide to the Galaxy"
  }, 
  {
    "author": {
      "lastName": "Anthony", 
      "firstName": "Piers"
    }, 
    "title": "On a Pale Horse"
  }, 
  {
    "author": {
      "lastName": "Archer", 
      "firstName": "Jeffrey"
    }, 
    "title": "Not a Penny More, Not a Penny Less"
  }, 
  {
    "author": {
      "lastName": "Alcott", 
      "firstName": "Louisa May"
    }, 
    "title": "Little Women"
  }, 
  {
    "author": {
      "lastName": "Atwood", 
      "firstName": "Margaret"
    }, 
    "title": "The Blind Assassin"
  }, 
  {
    "author": {
      "lastName": "Asmiov", 
      "firstName": "Isaac"
    }, 
    "title": "Foundation"
  }, 
  {
    "author": {
      "lastName": "Asmiov", 
      "firstName": "Isaac"
    }, 
    "title": "Foundation and Earth"
  }, 
  {
    "author": {
      "lastName": "Archer", 
      "firstName": "Jeffrey"
    }, 
    "title": "A Prisoner of Birth"
  }, 
  {
    "author": {
      "lastName": "Atkinson", 
      "firstName": "Kate"
    }, 
    "title": "Started Early, Took My Dog"
  }, 
  {
    "author": {
      "lastName": "Adams", 
      "firstName": "Douglas"
    }, 
    "title": "Last Chance to See"
  }, 
  {
    "author": {
      "lastName": "Adams", 
      "firstName": "Richard"
    }, 
    "title": "Watership Down"
  }, 
  {
    "author": {
      "lastName": "Asimov", 
      "firstName": "Isaac"
    }, 
    "title": "I, Robot.pdf"
  }, 
  {
    "author": {
      "lastName": "Asmiov", 
      "firstName": "Isaac"
    }, 
    "title": "Foundation and Empire"
  }, 
  {
    "author": {
      "lastName": "Asmiov", 
      "firstName": "Isaac"
    }, 
    "title": "Foundation's Edge"
  }, 
  {
    "author": {
      "lastName": "Ambrose", 
      "firstName": "Stephen E."
    }, 
    "title": "Band of Brothers"
  }, 
  {
    "author": {
      "lastName": "Abercrombie", 
      "firstName": "Joe"
    }, 
    "title": "The Heroes"
  }, 
  {
    "author": {
      "lastName": "Adams", 
      "firstName": "Douglas"
    }, 
    "title": "Dirk Gently's Holistic Detective Agency"
  }, 
  {
    "author": {
      "lastName": "Alighieri", 
      "firstName": "Dante"
    }, 
    "title": "The Divine Comedy"
  }, 
  {
    "author": {
      "lastName": "Auel", 
      "firstName": "Jean M."
    }, 
    "title": "The Mammoth Hunters"
  }, 
  {
    "author": {
      "lastName": "Asmiov", 
      "firstName": "Isaac"
    }, 
    "title": "Prelude to Foundation"
  }, 
  {
    "author": {
      "lastName": "Abercrombie", 
      "firstName": "Joe"
    }, 
    "title": "The Blade Itself"
  }, 
  {
    "author": {
      "lastName": "Adams", 
      "firstName": "Douglas"
    }, 
    "title": "The Restaurant at the End of the Universe"
  }, 
  {
    "author": {
      "lastName": "Abercrombie", 
      "firstName": "Joe"
    }, 
    "title": "Last Argument of Kings"
  }, 
  {
    "author": {
      "lastName": "Atwood", 
      "firstName": "Margaret"
    }, 
    "title": "The Year of the Flood"
  }, 
  {
    "author": {
      "lastName": "Barker", 
      "firstName": "Clive"
    }, 
    "title": "Imajica"
  }, 
  {
    "author": {
      "lastName": "Benson", 
      "firstName": "Amber"
    }, 
    "title": "Cat's Claw"
  }, 
  {
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Fool Moon"
  }, 
  {
    "author": {
      "lastName": "Barclay", 
      "firstName": "Linwood"
    }, 
    "title": "No Time for Goodbye"
  }, 
  {
    "author": {
      "lastName": "Bradbury", 
      "firstName": "Ray"
    }, 
    "title": "Fahrenheit 451"
  }, 
  {
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Summer Knight"
  }, 
  {
    "author": {
      "lastName": "Brooks", 
      "firstName": "Geraldine"
    }, 
    "title": "Caleb's Crossing"
  }, 
  {
    "author": {
      "lastName": "Barry", 
      "firstName": "Max"
    }, 
    "title": "Jennifer Government"
  }, 
  {
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Blood Rites"
  }, 
  {
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "White Night"
  }, 
  {
    "author": {
      "lastName": "Butler", 
      "firstName": "Octavia"
    }, 
    "title": "Wild Seed"
  }, 
  {
    "author": {
      "lastName": "Bradbury", 
      "firstName": "Ray"
    }, 
    "title": "Zen in the Art of Writing"
  }, 
  {
    "author": {
      "lastName": "Banks", 
      "firstName": "Ian M."
    }, 
    "title": "The Wasp Factory"
  }, 
  {
    "author": {
      "lastName": "Brady", 
      "firstName": "Frank"
    }, 
    "title": "Endgame"
  }, 
  {
    "author": {
      "lastName": "Brooks", 
      "firstName": "Max"
    }, 
    "title": "World War Z"
  }, 
  {
    "author": {
      "lastName": "Burroughs", 
      "firstName": "Augusten"
    }, 
    "title": "Running with Scissors"
  }, 
  {
    "author": {
      "lastName": "Berg", 
      "firstName": "Elizabeth"
    }, 
    "title": "The Pull of the Moon"
  }, 
  {
    "author": {
      "lastName": "Briggs", 
      "firstName": "Patricia"
    }, 
    "title": "Blood Bound"
  }, 
  {
    "author": {
      "lastName": "Banks", 
      "firstName": "Ian M."
    }, 
    "title": "Excession"
  }, 
  {
    "author": {
      "lastName": "Baigent", 
      "firstName": "Michael"
    }, 
    "title": "Holy Blood, Holy Grail"
  }, 
  {
    "author": {
      "lastName": "Bryson", 
      "firstName": "Bill"
    }, 
    "title": "Made in America"
  }, 
  {
    "author": {
      "lastName": "Brown", 
      "firstName": "Dan"
    }, 
    "title": "Digital Fortress"
  }, 
  {
    "author": {
      "lastName": "Bulgakov", 
      "firstName": "Mikhail"
    }, 
    "title": "The Master and Margarita"
  }, 
  {
    "author": {
      "lastName": "Banks", 
      "firstName": "Ian M."
    }, 
    "title": "The Algebraist"
  }, 
  {
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Turn Coat"
  }, 
  {
    "author": {
      "lastName": "Bryson", 
      "firstName": "Bill"
    }, 
    "title": "A Walk in the Woods"
  }, 
  {
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Proven Guilty"
  }, 
  {
    "author": {
      "lastName": "Briggs", 
      "firstName": "Patricia"
    }, 
    "title": "Moon Called"
  }, 
  {
    "author": {
      "lastName": "Barry", 
      "firstName": "Dave"
    }, 
    "title": "Dave Barry's Only Travel Guide You'll Ever Need"
  }, 
  {
    "author": {
      "lastName": "Banks", 
      "firstName": "Ian M."
    }, 
    "title": "Inversions"
  }, 
  {
    "author": {
      "lastName": "Baum", 
      "firstName": "L. Frank"
    }, 
    "title": "The Wonderful Wizard of Oz"
  }, 
  {
    "author": {
      "lastName": "Brin", 
      "firstName": "David"
    }, 
    "title": "The Postman"
  }, 
  {
    "author": {
      "lastName": "Binchy", 
      "firstName": "Maeve"
    }, 
    "title": "Circle of Friends"
  }, 
  {
    "author": {
      "lastName": "Banks", 
      "firstName": "Ian M."
    }, 
    "title": "Look to Windward"
  }, 
  {
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "First Lord's Fury"
  }, 
  {
    "author": {
      "lastName": "Banks", 
      "firstName": "Ian M."
    }, 
    "title": "Use of Weapons"
  }, 
  {
    "author": {
      "lastName": "Burroughs", 
      "firstName": "William"
    }, 
    "title": "Naked Lunch"
  }, 
  {
    "author": {
      "lastName": "Bush", 
      "firstName": "George W."
    }, 
    "title": "Decision Points"
  }, 
  {
    "author": {
      "lastName": "Barker", 
      "firstName": "Clive"
    }, 
    "title": "The Damnation Game"
  }, 
  {
    "author": {
      "lastName": "Banks", 
      "firstName": "Ian M."
    }, 
    "title": "Matter"
  }, 
  {
    "author": {
      "lastName": "Bourne", 
      "firstName": "J.L."
    }, 
    "title": "Beyond Exile"
  }, 
  {
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Academ's Fury"
  }, 
  {
    "author": {
      "lastName": "Barry", 
      "firstName": "Dave"
    }, 
    "title": "Big Trouble"
  }, 
  {
    "author": {
      "lastName": "Brockway", 
      "firstName": "Robert"
    }, 
    "title": "Everything Is Going to Kill Everybody"
  }, 
  {
    "author": {
      "lastName": "Benchley", 
      "firstName": "Peter"
    }, 
    "title": "Jaws"
  }, 
  {
    "author": {
      "lastName": "Brooks", 
      "firstName": "David"
    }, 
    "title": "The Social Animal"
  }, 
  {
    "author": {
      "lastName": "Brooks", 
      "firstName": "Max"
    }, 
    "title": "The Zombie Survival Guide"
  }, 
  {
    "author": {
      "lastName": "Binchy", 
      "firstName": "Maeve"
    }, 
    "title": "Echoes"
  }, 
  {
    "author": {
      "lastName": "Binchy", 
      "firstName": "Maeve"
    }, 
    "title": "Heart and Soul"
  }, 
  {
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Grave Peril"
  }, 
  {
    "author": {
      "lastName": "Brooks", 
      "firstName": "Terry"
    }, 
    "title": "The Sword of Shannara"
  }, 
  {
    "author": {
      "lastName": "Barclay", 
      "firstName": "Linwood"
    }, 
    "title": "Fear the Worst"
  }, 
  {
    "author": {
      "lastName": "Bradbury", 
      "firstName": "Ray"
    }, 
    "title": "Something Wicked This Way Comes"
  }, 
  {
    "author": {
      "lastName": "Berg", 
      "firstName": "Elizabeth"
    }, 
    "title": "Open House"
  }, 
  {
    "author": {
      "lastName": "Bukowski", 
      "firstName": "Charles"
    }, 
    "title": "Women"
  }, 
  {
    "author": {
      "lastName": "Birbiglia", 
      "firstName": "Mike"
    }, 
    "title": "Sleepwalk With Me, and Other Painfully True Stories"
  }, 
  {
    "author": {
      "lastName": "Binchy", 
      "firstName": "Maeve"
    }, 
    "title": "Whitethorn Woods"
  }, 
  {
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Small Favor"
  }, 
  {
    "author": {
      "lastName": "Banks", 
      "firstName": "Ian M."
    }, 
    "title": "The Crow Road"
  }, 
  {
    "author": {
      "lastName": "Bryson", 
      "firstName": "Bill"
    }, 
    "title": "I'm a Stranger Here Myself"
  }, 
  {
    "author": {
      "lastName": "Banks", 
      "firstName": "Ian M."
    }, 
    "title": "The Player of Games"
  }, 
  {
    "author": {
      "lastName": "Brown", 
      "firstName": "Dan"
    }, 
    "title": "The Da Vinci Code"
  }, 
  {
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Princeps' Fury"
  }, 
  {
    "author": {
      "lastName": "Briggs", 
      "firstName": "Patricia"
    }, 
    "title": "Silver Borne"
  }, 
  {
    "author": {
      "lastName": "Bester", 
      "firstName": "Alfred"
    }, 
    "title": "The Demolished Man"
  }, 
  {
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Changes"
  }, 
  {
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Death Masks"
  }, 
  {
    "author": {
      "lastName": "Bellow", 
      "firstName": "Saul"
    }, 
    "title": "Humboldt's Gift"
  }, 
  {
    "author": {
      "lastName": "Bester", 
      "firstName": "Alfred"
    }, 
    "title": "The Stars My Destination"
  }, 
  {
    "author": {
      "lastName": "Bourne", 
      "firstName": "J.L."
    }, 
    "title": "Day By Day Armageddon"
  }, 
  {
    "author": {
      "lastName": "Bakker", 
      "firstName": "R. Scott"
    }, 
    "title": "The Darkness That Comes Before"
  }, 
  {
    "author": {
      "lastName": "Bradbury", 
      "firstName": "Ray"
    }, 
    "title": "The Martian Chronicles"
  }, 
  {
    "author": {
      "lastName": "Burgess", 
      "firstName": "Anthony"
    }, 
    "title": "A Clockwork Orange"
  }, 
  {
    "author": {
      "lastName": "Bradbury", 
      "firstName": "Ray"
    }, 
    "title": "The Illustrated Man"
  }, 
  {
    "author": {
      "lastName": "Binchy", 
      "firstName": "Maeve"
    }, 
    "title": "Tara Road"
  }, 
  {
    "author": {
      "lastName": "Brands", 
      "firstName": "H.W."
    }, 
    "title": "The First American"
  }, 
  {
    "author": {
      "lastName": "Binchy", 
      "firstName": "Maeve"
    }, 
    "title": "Minding Frankie"
  }, 
  {
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Dead Beat"
  }, 
  {
    "author": {
      "lastName": "Briggs", 
      "firstName": "Patricia"
    }, 
    "title": "River Marked"
  }, 
  {
    "author": {
      "lastName": "Bryson", 
      "firstName": "Bill"
    }, 
    "title": "A Short History of Nearly Everything"
  }, 
  {
    "author": {
      "lastName": "Binchy", 
      "firstName": "Maeve"
    }, 
    "title": "The Glass Lake"
  }, 
  {
    "author": {
      "lastName": "Bronte", 
      "firstName": "Charlotte"
    }, 
    "title": "Jane Eyre"
  }, 
  {
    "author": {
      "lastName": "Barbery", 
      "firstName": "Muriel"
    }, 
    "title": "The Elegance of the Hedgehog"
  }, 
  {
    "author": {
      "lastName": "Bowden", 
      "firstName": "Mark"
    }, 
    "title": "Black Hawk Down"
  }, 
  {
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Furies of Calderon"
  }, 
  {
    "author": {
      "lastName": "Banks", 
      "firstName": "Ian M."
    }, 
    "title": "Surface Detail"
  }, 
  {
    "author": {
      "lastName": "Berg", 
      "firstName": "Elizabeth"
    }, 
    "title": "Joy School"
  }, 
  {
    "author": {
      "lastName": "Bakker", 
      "firstName": "R. Scott"
    }, 
    "title": "The Warrior Prophet"
  }, 
  {
    "author": {
      "lastName": "Brett", 
      "firstName": "Peter V."
    }, 
    "title": "The Warded Man"
  }, 
  {
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Storm Front"
  }, 
  {
    "author": {
      "lastName": "Benson", 
      "firstName": "Amber"
    }, 
    "title": "Serpent's Storm"
  }, 
  {
    "author": {
      "lastName": "Bacigalupi", 
      "firstName": "Paolo"
    }, 
    "title": "The Windup Girl"
  }, 
  {
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Cursor's Fury"
  }, 
  {
    "author": {
      "lastName": "Ballard", 
      "firstName": "J.G."
    }, 
    "title": "Crash"
  }, 
  {
    "author": {
      "lastName": "Banks", 
      "firstName": "Ian M."
    }, 
    "title": "Transition"
  }, 
  {
    "author": {
      "lastName": "Bakker", 
      "firstName": "R. Scott"
    }, 
    "title": "The Thousandfold Thought"
  }, 
  {
    "author": {
      "lastName": "Benson", 
      "firstName": "Amber"
    }, 
    "title": "Death's Daughter"
  }, 
  {
    "author": {
      "lastName": "Baldacci", 
      "firstName": "David"
    }, 
    "title": "The Winner"
  }, 
  {
    "author": {
      "lastName": "Browne", 
      "firstName": "Renni"
    }, 
    "title": "Editing for Fiction Writers"
  }, 
  {
    "author": {
      "lastName": "Brown", 
      "firstName": "Dan"
    }, 
    "title": "The Lost Symbol"
  }, 
  {
    "author": {
      "lastName": "Briggs", 
      "firstName": "Patricia"
    }, 
    "title": "Bone Crossed"
  }, 
  {
    "author": {
      "lastName": "Barclay", 
      "firstName": "Linwood"
    }, 
    "title": "Never Look Away"
  }, 
  {
    "author": {
      "lastName": "Briggs", 
      "firstName": "Patricia"
    }, 
    "title": "Iron Kissed"
  }, 
  {
    "author": {
      "lastName": "Banks", 
      "firstName": "Ian M."
    }, 
    "title": "Consider Phlebas"
  }, 
  {
    "author": {
      "lastName": "Brown", 
      "firstName": "Dan"
    }, 
    "title": "Angels and Demons"
  }, 
  {
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Captain's Fury"
  }, 
  {
    "author": {
      "lastName": "Butcher", 
      "firstName": "Jim"
    }, 
    "title": "Side Jobs"
  }, 
  {
    "author": {
      "lastName": "Brown", 
      "firstName": "Dan"
    }, 
    "title": "Deception Point"
  }, 
  {
    "author": {
      "lastName": "Leonard", 
      "firstName": "Elmore"
    }, 
    "title": "Freaky Deaky"
  }, 
  {
    "author": {
      "lastName": "Ludlum", 
      "firstName": "Robert"
    }, 
    "title": "The Bourne Identity"
  }, 
  {
    "author": {
      "lastName": "Littell", 
      "firstName": "Jonathan"
    }, 
    "title": "The Kindly Ones"
  }, 
  {
    "author": {
      "lastName": "Lawhead", 
      "firstName": "Stephen R."
    }, 
    "title": "Hood"
  }, 
  {
    "author": {
      "lastName": "Leonard", 
      "firstName": "Elmore"
    }, 
    "title": "Out of Sight"
  }, 
  {
    "author": {
      "lastName": "Levitt", 
      "firstName": "Steven D."
    }, 
    "title": "Superfreakonomics"
  }, 
  {
    "author": {
      "lastName": "Le Carre", 
      "firstName": "John"
    }, 
    "title": "The Spy Who Came in from the Cold"
  }, 
  {
    "author": {
      "lastName": "Loewen", 
      "firstName": "James"
    }, 
    "title": "Lies My Teacher Told Me"
  }, 
  {
    "author": {
      "lastName": "Leyner", 
      "firstName": "Mark"
    }, 
    "title": "Why Do Men Have Nipples, Hundreds of Questions You'd Only Ask a Doctor After Your Third Martini"
  }, 
  {
    "author": {
      "lastName": "Lukeman", 
      "firstName": "Noah"
    }, 
    "title": "The First Five Pages"
  }, 
  {
    "author": {
      "lastName": "Larsson", 
      "firstName": "Stieg"
    }, 
    "title": "The Girl with the Dragon Tattoo"
  }, 
  {
    "author": {
      "lastName": "Lansing", 
      "firstName": "Alfred"
    }, 
    "title": "Endurance"
  }, 
  {
    "author": {
      "lastName": "Ludlum", 
      "firstName": "Robert"
    }, 
    "title": "The Bourne Supremacy"
  }, 
  {
    "author": {
      "lastName": "Lawhead", 
      "firstName": "Stephen R."
    }, 
    "title": "Avalon"
  }, 
  {
    "author": {
      "lastName": "Letts", 
      "firstName": "Billie"
    }, 
    "title": "Where the Heart Is"
  }, 
  {
    "author": {
      "lastName": "Liss", 
      "firstName": "David"
    }, 
    "title": "The Coffee Trader"
  }, 
  {
    "author": {
      "lastName": "Lawhead", 
      "firstName": "Stephen R."
    }, 
    "title": "Pendragon"
  }, 
  {
    "author": {
      "lastName": "Lewis", 
      "firstName": "C.S."
    }, 
    "title": "The Last Battle"
  }, 
  {
    "author": {
      "lastName": "Leonard", 
      "firstName": "Elmore"
    }, 
    "title": "Riding the Rap"
  }, 
  {
    "author": {
      "lastName": "Larson", 
      "firstName": "Erik"
    }, 
    "title": "Devil in the White City"
  }, 
  {
    "author": {
      "lastName": "Leckie", 
      "firstName": "Robert"
    }, 
    "title": "Helmet for My Pillow, From Parris Island to the Pacific"
  }, 
  {
    "author": {
      "lastName": "Lawhead", 
      "firstName": "Stephen R."
    }, 
    "title": "Grail"
  }, 
  {
    "author": {
      "lastName": "Larsson", 
      "firstName": "Stieg"
    }, 
    "title": "The Girl Who Played with Fire"
  }, 
  {
    "author": {
      "lastName": "Lewis", 
      "firstName": "Michael"
    }, 
    "title": "The Blind Side"
  }, 
  {
    "author": {
      "lastName": "Leonard", 
      "firstName": "Elmore"
    }, 
    "title": "Get Shorty"
  }, 
  {
    "author": {
      "lastName": "Lehane", 
      "firstName": "Dennis"
    }, 
    "title": "Darkness, Take My Hand"
  }, 
  {
    "author": {
      "lastName": "Lehane", 
      "firstName": "Dennis"
    }, 
    "title": "Mystic River"
  }, 
  {
    "author": {
      "lastName": "Lewis", 
      "firstName": "C.S."
    }, 
    "title": "The Voyage of the Dawn Treader"
  }, 
  {
    "author": {
      "lastName": "Lynch", 
      "firstName": "Scott"
    }, 
    "title": "The Lies of Locke Lamora"
  }, 
  {
    "author": {
      "lastName": "Lawhead", 
      "firstName": "Stephen R."
    }, 
    "title": "Tuck"
  }, 
  {
    "author": {
      "lastName": "Lehane", 
      "firstName": "Dennis"
    }, 
    "title": "A Drink Before the War"
  }, 
  {
    "author": {
      "lastName": "Ludlum", 
      "firstName": "Robert"
    }, 
    "title": "The Bourne Ultimatum"
  }, 
  {
    "author": {
      "lastName": "Leonard", 
      "firstName": "Elmore"
    }, 
    "title": "Jackie Brown"
  }, 
  {
    "author": {
      "lastName": "Lawrence", 
      "firstName": "D.H."
    }, 
    "title": "Lady Chatterley's Lover"
  }, 
  {
    "author": {
      "lastName": "Lewis", 
      "firstName": "Michael"
    }, 
    "title": "The Big Short, Inside the Doomsday Machine"
  }, 
  {
    "author": {
      "lastName": "Lowry", 
      "firstName": "Lois"
    }, 
    "title": "The Giver"
  }, 
  {
    "author": {
      "lastName": "Lethem", 
      "firstName": "Jonathan"
    }, 
    "title": "Motherless Brooklyn"
  }, 
  {
    "author": {
      "lastName": "Lawhead", 
      "firstName": "Stephen R."
    }, 
    "title": "Merlin"
  }, 
  {
    "author": {
      "lastName": "L'Engle", 
      "firstName": "Madeleine"
    }, 
    "title": "A Wrinkle in Time"
  }, 
  {
    "author": {
      "lastName": "Leary", 
      "firstName": "Denis"
    }, 
    "title": "Why We Suck"
  }, 
  {
    "author": {
      "lastName": "Lehane", 
      "firstName": "Dennis"
    }, 
    "title": "Shutter Island"
  }, 
  {
    "author": {
      "lastName": "Liss", 
      "firstName": "David"
    }, 
    "title": "A Conspiracy of Paper"
  }, 
  {
    "author": {
      "lastName": "Lindsay", 
      "firstName": "Jeff"
    }, 
    "title": "Darkly Dreaming Dexter"
  }, 
  {
    "author": {
      "lastName": "Laurie", 
      "firstName": "Hugh"
    }, 
    "title": "The Gun Seller"
  }, 
  {
    "author": {
      "lastName": "Lehane", 
      "firstName": "Dennis"
    }, 
    "title": "Gone, Baby, Gone"
  }, 
  {
    "author": {
      "lastName": "Lewis", 
      "firstName": "C.S."
    }, 
    "title": "The Lion, The Witch and The Wardrobe"
  }, 
  {
    "author": {
      "lastName": "Lynch", 
      "firstName": "Scott"
    }, 
    "title": "Red Seas Under Red Skies"
  }, 
  {
    "author": {
      "lastName": "Lahiri", 
      "firstName": "Jhumpa"
    }, 
    "title": "Interpreter of Maladies"
  }, 
  {
    "author": {
      "lastName": "Lindsay", 
      "firstName": "Jeff"
    }, 
    "title": "Dexter in the Dark"
  }, 
  {
    "author": {
      "lastName": "Lehane", 
      "firstName": "Dennis"
    }, 
    "title": "The Given Day"
  }, 
  {
    "author": {
      "lastName": "Liss", 
      "firstName": "David"
    }, 
    "title": "The Whiskey Rebel"
  }, 
  {
    "author": {
      "lastName": "Lehane", 
      "firstName": "Dennis"
    }, 
    "title": "Sacred"
  }, 
  {
    "author": {
      "lastName": "Lawhead", 
      "firstName": "Stephen R."
    }, 
    "title": "Scarlet"
  }, 
  {
    "author": {
      "lastName": "Lovecraft", 
      "firstName": "H.P."
    }, 
    "title": "Definitive H.P. Lovecraft"
  }, 
  {
    "author": {
      "lastName": "Lewis", 
      "firstName": "C.S."
    }, 
    "title": "The Horse And His Boy"
  }, 
  {
    "author": {
      "lastName": "Lindsay", 
      "firstName": "Jeff"
    }, 
    "title": "Dearly Devoted Dexter"
  }, 
  {
    "author": {
      "lastName": "Lawrence", 
      "firstName": "D.H."
    }, 
    "title": "Sons and Lovers"
  }, 
  {
    "author": {
      "lastName": "Larsson", 
      "firstName": "Stieg"
    }, 
    "title": "The Girl Who Kicked the Hornet's Nest"
  }, 
  {
    "author": {
      "lastName": "Leonard", 
      "firstName": "Elmore"
    }, 
    "title": "Ten to Yuma and Other Stories"
  }, 
  {
    "author": {
      "lastName": "London", 
      "firstName": "Jack"
    }, 
    "title": "The Call of the Wild and White Fang"
  }, 
  {
    "author": {
      "lastName": "Leonard", 
      "firstName": "Elmore"
    }, 
    "title": "Cuba Libre"
  }, 
  {
    "author": {
      "lastName": "Lamb", 
      "firstName": "Wally"
    }, 
    "title": "I Know This Much Is True"
  }, 
  {
    "author": {
      "lastName": "Lowry", 
      "firstName": "Malcolm"
    }, 
    "title": "Under the Volcano"
  }, 
  {
    "author": {
      "lastName": "Leckie", 
      "firstName": "Robert"
    }, 
    "title": "Okinawa, The Last Battle of World War II"
  }, 
  {
    "author": {
      "lastName": "Lawhead", 
      "firstName": "Stephen R."
    }, 
    "title": "Arthur"
  }, 
  {
    "author": {
      "lastName": "Leonard", 
      "firstName": "Elmore"
    }, 
    "title": "Tishomingo Blues"
  }, 
  {
    "author": {
      "lastName": "Lindsay", 
      "firstName": "Jeff"
    }, 
    "title": "Dexter by Design"
  }, 
  {
    "author": {
      "lastName": "Lindquist", 
      "firstName": "John Avjide"
    }, 
    "title": "Let the Right One In"
  }, 
  {
    "author": {
      "lastName": "Larson", 
      "firstName": "Erik"
    }, 
    "title": "In the Garden of Beasts"
  }, 
  {
    "author": {
      "lastName": "Lerner", 
      "firstName": "Betsy"
    }, 
    "title": "The Forest for the Trees"
  }, 
  {
    "author": {
      "lastName": "Lewis", 
      "firstName": "C.S."
    }, 
    "title": "The Silver Chair"
  }, 
  {
    "author": {
      "lastName": "Leonard", 
      "firstName": "Elmore"
    }, 
    "title": "Be Cool"
  }, 
  {
    "author": {
      "lastName": "Liss", 
      "firstName": "David"
    }, 
    "title": "The Devil's Company"
  }, 
  {
    "author": {
      "lastName": "Landstrom", 
      "firstName": "Sam"
    }, 
    "title": "MetaGame"
  }, 
  {
    "author": {
      "lastName": "Lindsay", 
      "firstName": "Jeff"
    }, 
    "title": "Dexter is Delicious"
  }, 
  {
    "author": {
      "lastName": "Lander", 
      "firstName": "Christian"
    }, 
    "title": "Stuff White People Like"
  }, 
  {
    "author": {
      "lastName": "Lamb", 
      "firstName": "Wally"
    }, 
    "title": "The Hour I First Believed"
  }, 
  {
    "author": {
      "lastName": "Le Carre", 
      "firstName": "John"
    }, 
    "title": "Tinker, Tailor, Soldier, Spy"
  }, 
  {
    "author": {
      "lastName": "Levitt", 
      "firstName": "Steven D."
    }, 
    "title": "Freakonomics"
  }, 
  {
    "author": {
      "lastName": "Lehane", 
      "firstName": "Dennis"
    }, 
    "title": "Prayers for Rain"
  }, 
  {
    "author": {
      "lastName": "Lehane", 
      "firstName": "Dennis"
    }, 
    "title": "Moonlight Mile"
  }, 
  {
    "author": {
      "lastName": "Lowe", 
      "firstName": "Rob"
    }, 
    "title": "Stories I Only Tell My Friends"
  }, 
  {
    "author": {
      "lastName": "Lewis", 
      "firstName": "C.S."
    }, 
    "title": "Prince Caspian"
  }, 
  {
    "author": {
      "lastName": "Lawhead", 
      "firstName": "Stephen R."
    }, 
    "title": "Taliesin"
  }, 
  {
    "author": {
      "lastName": "Lee", 
      "firstName": "Harper"
    }, 
    "title": "To Kill a Mockingbird`"
  }, 
  {
    "author": {
      "lastName": "Lewis", 
      "firstName": "C.S."
    }, 
    "title": "The Magician's Nephew"
  }, 
  {
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "The Narrows"
  }, 
  {
    "author": {
      "lastName": "Crichton", 
      "firstName": "Michael"
    }, 
    "title": "Congo"
  }, 
  {
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "The Innocent"
  }, 
  {
    "author": {
      "lastName": "Cooper", 
      "firstName": "James Fennimore"
    }, 
    "title": "The Last of the Mohicans"
  }, 
  {
    "author": {
      "lastName": "Chernow", 
      "firstName": "Ron"
    }, 
    "title": "Washington"
  }, 
  {
    "author": {
      "lastName": "Crane", 
      "firstName": "Stephen"
    }, 
    "title": "The Red Badge of Courage"
  }, 
  {
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "Fade Away"
  }, 
  {
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "Unnatural.Exprosure"
  }, 
  {
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Bernard"
    }, 
    "title": "The Last Kingdom"
  }, 
  {
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "City of Bones"
  }, 
  {
    "author": {
      "lastName": "Crais", 
      "firstName": "Robert"
    }, 
    "title": "Sunset Express"
  }, 
  {
    "author": {
      "lastName": "Cussler", 
      "firstName": "Clive"
    }, 
    "title": "Inca Gold"
  }, 
  {
    "author": {
      "lastName": "Child", 
      "firstName": "Lee"
    }, 
    "title": "Echo Burning"
  }, 
  {
    "author": {
      "lastName": "Card", 
      "firstName": "Orson Scott"
    }, 
    "title": "Ender in Exile"
  }, 
  {
    "author": {
      "lastName": "Crais", 
      "firstName": "Robert"
    }, 
    "title": "L.A. Requiem"
  }, 
  {
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "Darkest Fear"
  }, 
  {
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Bernard"
    }, 
    "title": "Vagabond"
  }, 
  {
    "author": {
      "lastName": "Crichton", 
      "firstName": "Michael"
    }, 
    "title": "The Lost World"
  }, 
  {
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Bernard"
    }, 
    "title": "The Burning Land"
  }, 
  {
    "author": {
      "lastName": "Clavell", 
      "firstName": "James"
    }, 
    "title": "Shogun"
  }, 
  {
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "The Final Detail"
  }, 
  {
    "author": {
      "lastName": "Colfer", 
      "firstName": "Eoin"
    }, 
    "title": "Artemis Fowl"
  }, 
  {
    "author": {
      "lastName": "Crichton", 
      "firstName": "Michael"
    }, 
    "title": "Prey"
  }, 
  {
    "author": {
      "lastName": "Carr", 
      "firstName": "Caleb"
    }, 
    "title": "The Alienist"
  }, 
  {
    "author": {
      "lastName": "Cooper", 
      "firstName": "Susan"
    }, 
    "title": "Silver on the Tree"
  }, 
  {
    "author": {
      "lastName": "Chandler", 
      "firstName": "Raymond"
    }, 
    "title": "The Big Sleep"
  }, 
  {
    "author": {
      "lastName": "Card", 
      "firstName": "Orson Scott"
    }, 
    "title": "Shadow of the Giant"
  }, 
  {
    "author": {
      "lastName": "Collins", 
      "firstName": "Suzanne"
    }, 
    "title": "The Hunger Games"
  }, 
  {
    "author": {
      "lastName": "Child", 
      "firstName": "Lee"
    }, 
    "title": "Tripwire"
  }, 
  {
    "author": {
      "lastName": "Clancy", 
      "firstName": "Tom"
    }, 
    "title": "Rainbow Six"
  }, 
  {
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "The Fifth Witness"
  }, 
  {
    "author": {
      "lastName": "Crais", 
      "firstName": "Robert"
    }, 
    "title": "Chasing Darkness"
  }, 
  {
    "author": {
      "lastName": "Crais", 
      "firstName": "Robert"
    }, 
    "title": "Demolition Angel"
  }, 
  {
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Bernard"
    }, 
    "title": "The Lords of the North"
  }, 
  {
    "author": {
      "lastName": "Clancy", 
      "firstName": "Tom"
    }, 
    "title": "The Hunt for Red October"
  }, 
  {
    "author": {
      "lastName": "Clarke", 
      "firstName": "Arthur C."
    }, 
    "title": "Childhood's End"
  }, 
  {
    "author": {
      "lastName": "Child", 
      "firstName": "Lee"
    }, 
    "title": "61 Hours"
  }, 
  {
    "author": {
      "lastName": "Chabon", 
      "firstName": "Michael"
    }, 
    "title": "The Amazing Adventures of Kavalier and Clay"
  }, 
  {
    "author": {
      "lastName": "Chomsky", 
      "firstName": "Noam"
    }, 
    "title": "The Chomsky Reader"
  }, 
  {
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Bernard"
    }, 
    "title": "Heretic"
  }, 
  {
    "author": {
      "lastName": "Conrad", 
      "firstName": "Joseph"
    }, 
    "title": "Heart Of Darkness"
  }, 
  {
    "author": {
      "lastName": "Connolly", 
      "firstName": "John"
    }, 
    "title": "The Gates"
  }, 
  {
    "author": {
      "lastName": "Child", 
      "firstName": "Lee"
    }, 
    "title": "The Hard Way"
  }, 
  {
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "Play Dead"
  }, 
  {
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "Angels Flight"
  }, 
  {
    "author": {
      "lastName": "Chua", 
      "firstName": "Amy"
    }, 
    "title": "Battle Hymn of the Tiger Mother"
  }, 
  {
    "author": {
      "lastName": "Crais", 
      "firstName": "Robert"
    }, 
    "title": "The Two Minute Rule"
  }, 
  {
    "author": {
      "lastName": "Castaneda", 
      "firstName": "Carlos"
    }, 
    "title": "The Teachings of Don Juan"
  }, 
  {
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "The Body Farm"
  }, 
  {
    "author": {
      "lastName": "Crais", 
      "firstName": "Robert"
    }, 
    "title": "Hostage"
  }, 
  {
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "Live Wire"
  }, 
  {
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Bernard"
    }, 
    "title": "The Pale Horseman"
  }, 
  {
    "author": {
      "lastName": "Card", 
      "firstName": "Orson Scott"
    }, 
    "title": "Shadow Puppets"
  }, 
  {
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "Cause of Death"
  }, 
  {
    "author": {
      "lastName": "Carlin", 
      "firstName": "George"
    }, 
    "title": "Last Words"
  }, 
  {
    "author": {
      "lastName": "Child", 
      "firstName": "Lee"
    }, 
    "title": "Gone Tomorrow"
  }, 
  {
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "Scarpetta"
  }, 
  {
    "author": {
      "lastName": "Card", 
      "firstName": "Orson Scott"
    }, 
    "title": "Ender's Game"
  }, 
  {
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "Caught"
  }, 
  {
    "author": {
      "lastName": "Collins", 
      "firstName": "Suzanne"
    }, 
    "title": "Mockingjay"
  }, 
  {
    "author": {
      "lastName": "Cather", 
      "firstName": "Willa"
    }, 
    "title": "My Antonia"
  }, 
  {
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "Point of Origin"
  }, 
  {
    "author": {
      "lastName": "Cook", 
      "firstName": "Glen"
    }, 
    "title": "The Black Company"
  }, 
  {
    "author": {
      "lastName": "Child", 
      "firstName": "Lee"
    }, 
    "title": "Nothing to Lose"
  }, 
  {
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "Drop Shot"
  }, 
  {
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "Predator"
  }, 
  {
    "author": {
      "lastName": "Clancy", 
      "firstName": "Tom"
    }, 
    "title": "Executive Orders"
  }, 
  {
    "author": {
      "lastName": "Cheever", 
      "firstName": "John"
    }, 
    "title": "The Stories of John Cheever"
  }, 
  {
    "author": {
      "lastName": "Cooper", 
      "firstName": "Susan"
    }, 
    "title": "Over Sea, Under Stone"
  }, 
  {
    "author": {
      "lastName": "Crichton", 
      "firstName": "Michael"
    }, 
    "title": "The Andromeda Strain"
  }, 
  {
    "author": {
      "lastName": "Carlin", 
      "firstName": "George"
    }, 
    "title": "When Will Jesus Bring the Pork Chops"
  }, 
  {
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Bernard"
    }, 
    "title": "The Winter King"
  }, 
  {
    "author": {
      "lastName": "Clarke", 
      "firstName": "Arthur C."
    }, 
    "title": "2001 A Space Odyssey"
  }, 
  {
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "The Poet"
  }, 
  {
    "author": {
      "lastName": "Card", 
      "firstName": "Orson Scott"
    }, 
    "title": "Seventh Son"
  }, 
  {
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "The Black Ice"
  }, 
  {
    "author": {
      "lastName": "Connolly", 
      "firstName": "John"
    }, 
    "title": "The Book Of Lost Things"
  }, 
  {
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "The Overlook"
  }, 
  {
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "Deal Breaker"
  }, 
  {
    "author": {
      "lastName": "Crichton", 
      "firstName": "Michael"
    }, 
    "title": "Timeline"
  }, 
  {
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "The Lincoln Lawyer"
  }, 
  {
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "The Last Coyote"
  }, 
  {
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "Trace"
  }, 
  {
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "Postmortem"
  }, 
  {
    "author": {
      "lastName": "Crais", 
      "firstName": "Robert"
    }, 
    "title": "Voodoo River"
  }, 
  {
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "The Scarecrow"
  }, 
  {
    "author": {
      "lastName": "Crichton", 
      "firstName": "Michael"
    }, 
    "title": "Next"
  }, 
  {
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Bernard"
    }, 
    "title": "The Archer's Tale"
  }, 
  {
    "author": {
      "lastName": "Crais", 
      "firstName": "Robert"
    }, 
    "title": "Lullaby Town"
  }, 
  {
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "9 Dragons"
  }, 
  {
    "author": {
      "lastName": "Card", 
      "firstName": "Orson Scott"
    }, 
    "title": "Speaker for the Dead"
  }, 
  {
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Bernard"
    }, 
    "title": "Sword Song"
  }, 
  {
    "author": {
      "lastName": "Cleave", 
      "firstName": "Chris"
    }, 
    "title": "Little Bee"
  }, 
  {
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "The Scarpetta Factor"
  }, 
  {
    "author": {
      "lastName": "Castle", 
      "firstName": "Richard"
    }, 
    "title": "Heat Wave"
  }, 
  {
    "author": {
      "lastName": "Carolla", 
      "firstName": "Adam"
    }, 
    "title": "In Fifty Years We'll All Be Chicks"
  }, 
  {
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "Last Precinct"
  }, 
  {
    "author": {
      "lastName": "Christie", 
      "firstName": "Agatha"
    }, 
    "title": "And Then There Were None"
  }, 
  {
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "A Darkness More Than Night"
  }, 
  {
    "author": {
      "lastName": "Crais", 
      "firstName": "Robert"
    }, 
    "title": "The Watchman"
  }, 
  {
    "author": {
      "lastName": "Carnegie", 
      "firstName": "Dale"
    }, 
    "title": "How To Win Friends and Influence People"
  }, 
  {
    "author": {
      "lastName": "Child", 
      "firstName": "Lee"
    }, 
    "title": "Without Fail"
  }, 
  {
    "author": {
      "lastName": "Cross", 
      "firstName": "David"
    }, 
    "title": "I Drink for a Reason"
  }, 
  {
    "author": {
      "lastName": "Cooper", 
      "firstName": "Susan"
    }, 
    "title": "Greenwitch"
  }, 
  {
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "The Woods"
  }, 
  {
    "author": {
      "lastName": "Cullen", 
      "firstName": "Dave"
    }, 
    "title": "Columbine"
  }, 
  {
    "author": {
      "lastName": "Cussler", 
      "firstName": "Clive"
    }, 
    "title": "Shock Wave"
  }, 
  {
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "Long Lost"
  }, 
  {
    "author": {
      "lastName": "Child", 
      "firstName": "Lee"
    }, 
    "title": "Persuader"
  }, 
  {
    "author": {
      "lastName": "Carlin", 
      "firstName": "George"
    }, 
    "title": "Napalm and Silly Putty"
  }, 
  {
    "author": {
      "lastName": "Crichton", 
      "firstName": "Michael"
    }, 
    "title": "Airframe"
  }, 
  {
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "Promise Me"
  }, 
  {
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "Hold Tight"
  }, 
  {
    "author": {
      "lastName": "Card", 
      "firstName": "Orson Scott"
    }, 
    "title": "Xenocide"
  }, 
  {
    "author": {
      "lastName": "Child", 
      "firstName": "Lee"
    }, 
    "title": "Running Blind"
  }, 
  {
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "The Brass Verdict"
  }, 
  {
    "author": {
      "lastName": "Crichton", 
      "firstName": "Michael"
    }, 
    "title": "Sphere"
  }, 
  {
    "author": {
      "lastName": "Cooper", 
      "firstName": "Susan"
    }, 
    "title": "The Dark is Rising"
  }, 
  {
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "Body of Evidence"
  }, 
  {
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "From Potters Field"
  }, 
  {
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "The Black Echo"
  }, 
  {
    "author": {
      "lastName": "Connolly", 
      "firstName": "John"
    }, 
    "title": "Every Dead Thing"
  }, 
  {
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "The Closers"
  }, 
  {
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "Void Moon"
  }, 
  {
    "author": {
      "lastName": "Child", 
      "firstName": "Lee"
    }, 
    "title": "The Enemy"
  }, 
  {
    "author": {
      "lastName": "Crichton", 
      "firstName": "Michael"
    }, 
    "title": "Pirate Latitudes"
  }, 
  {
    "author": {
      "lastName": "Clancy", 
      "firstName": "Tom"
    }, 
    "title": "The Sum of All Fears"
  }, 
  {
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "Book of the Dead"
  }, 
  {
    "author": {
      "lastName": "Clancy", 
      "firstName": "Tom"
    }, 
    "title": "Patriot Games"
  }, 
  {
    "author": {
      "lastName": "Carlin", 
      "firstName": "George"
    }, 
    "title": "Brain Droppings"
  }, 
  {
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "One False Move"
  }, 
  {
    "author": {
      "lastName": "Colbert", 
      "firstName": "Stephen"
    }, 
    "title": "I Am America (And So Can You!)"
  }, 
  {
    "author": {
      "lastName": "Crais", 
      "firstName": "Robert"
    }, 
    "title": "The Monkey's Raincoat"
  }, 
  {
    "author": {
      "lastName": "Child", 
      "firstName": "Lee"
    }, 
    "title": "Killing Floor"
  }, 
  {
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Bernard"
    }, 
    "title": "Excalibur"
  }, 
  {
    "author": {
      "lastName": "Crais", 
      "firstName": "Robert"
    }, 
    "title": "Stalking the Angel"
  }, 
  {
    "author": {
      "lastName": "", 
      "firstName": "Cracked.com"
    }, 
    "title": "You Might Be a Zombie and Other Bad News"
  }, 
  {
    "author": {
      "lastName": "Carroll", 
      "firstName": "Lewis"
    }, 
    "title": "Glass"
  }, 
  {
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "Blood Work"
  }, 
  {
    "author": {
      "lastName": "Card", 
      "firstName": "Orson Scott"
    }, 
    "title": "Shadow of the Hegemon"
  }, 
  {
    "author": {
      "lastName": "Crais", 
      "firstName": "Robert"
    }, 
    "title": "Indigo Slam"
  }, 
  {
    "author": {
      "lastName": "Crichton", 
      "firstName": "Michael"
    }, 
    "title": "Eaters of the Dead"
  }, 
  {
    "author": {
      "lastName": "Card", 
      "firstName": "Orson Scott"
    }, 
    "title": "Children of the Mind"
  }, 
  {
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "Just One Look"
  }, 
  {
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "Back Spin"
  }, 
  {
    "author": {
      "lastName": "Cooper", 
      "firstName": "Susan"
    }, 
    "title": "The Grey King"
  }, 
  {
    "author": {
      "lastName": "Carver", 
      "firstName": "Raymond"
    }, 
    "title": "Where I'm Calling From"
  }, 
  {
    "author": {
      "lastName": "Coelho", 
      "firstName": "Paulo"
    }, 
    "title": "The Alchemist"
  }, 
  {
    "author": {
      "lastName": "Crichton", 
      "firstName": "Michael"
    }, 
    "title": "Disclosure"
  }, 
  {
    "author": {
      "lastName": "Collins", 
      "firstName": "Wilkie"
    }, 
    "title": "The Woman in White"
  }, 
  {
    "author": {
      "lastName": "Cash", 
      "firstName": "Johnny"
    }, 
    "title": "Cash, The Autobiography"
  }, 
  {
    "author": {
      "lastName": "Child", 
      "firstName": "Lee"
    }, 
    "title": "Die Trying"
  }, 
  {
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "Black Notice"
  }, 
  {
    "author": {
      "lastName": "Clancy", 
      "firstName": "Tom"
    }, 
    "title": "Clear and Present Danger"
  }, 
  {
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "The Concrete Blonde"
  }, 
  {
    "author": {
      "lastName": "Card", 
      "firstName": "Orson Scott"
    }, 
    "title": "Ender's Shadow"
  }, 
  {
    "author": {
      "lastName": "Child", 
      "firstName": "Lee"
    }, 
    "title": "Bad Luck and Trouble"
  }, 
  {
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "Lost Light"
  }, 
  {
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "Gone for Good"
  }, 
  {
    "author": {
      "lastName": "Collins", 
      "firstName": "Suzanne"
    }, 
    "title": "Catching Fire"
  }, 
  {
    "author": {
      "lastName": "Child", 
      "firstName": "Lee"
    }, 
    "title": "One Shot"
  }, 
  {
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "All That Remains"
  }, 
  {
    "author": {
      "lastName": "Crais", 
      "firstName": "Robert"
    }, 
    "title": "Free Fall"
  }, 
  {
    "author": {
      "lastName": "Coleridge", 
      "firstName": "Samuel Taylor"
    }, 
    "title": "The Rime of the Ancient Mariner"
  }, 
  {
    "author": {
      "lastName": "Crais", 
      "firstName": "Robert"
    }, 
    "title": "The Forgotten Man"
  }, 
  {
    "author": {
      "lastName": "Crichton", 
      "firstName": "Michael"
    }, 
    "title": "Jurassic Park"
  }, 
  {
    "author": {
      "lastName": "Christie", 
      "firstName": "Agatha"
    }, 
    "title": "Murder on the Orient Express"
  }, 
  {
    "author": {
      "lastName": "Castle", 
      "firstName": "Richard"
    }, 
    "title": "Naked Heat"
  }, 
  {
    "author": {
      "lastName": "Crais", 
      "firstName": "Robert"
    }, 
    "title": "The First Rule"
  }, 
  {
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "Tell No One"
  }, 
  {
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "Chasing the Dime"
  }, 
  {
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "Echo Park"
  }, 
  {
    "author": {
      "lastName": "Chadwick", 
      "firstName": "Elizabeth"
    }, 
    "title": "The Greatest Knight"
  }, 
  {
    "author": {
      "lastName": "Covey", 
      "firstName": "Stephen R."
    }, 
    "title": "Seven Habits of Highly Effective People"
  }, 
  {
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "Port Mortuary"
  }, 
  {
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "Cruel and Unusual"
  }, 
  {
    "author": {
      "lastName": "Cronin", 
      "firstName": "Justin"
    }, 
    "title": "The Passage"
  }, 
  {
    "author": {
      "lastName": "Crichton", 
      "firstName": "Michael"
    }, 
    "title": "State of Fear"
  }, 
  {
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "The Reversal"
  }, 
  {
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Bernard"
    }, 
    "title": "Azincourt"
  }, 
  {
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Bernard"
    }, 
    "title": "Enemy of God"
  }, 
  {
    "author": {
      "lastName": "Clinton", 
      "firstName": "Bill"
    }, 
    "title": "My Life"
  }, 
  {
    "author": {
      "lastName": "Coben", 
      "firstName": "Harlan"
    }, 
    "title": "No Second Chance"
  }, 
  {
    "author": {
      "lastName": "Chekhov", 
      "firstName": "Anton"
    }, 
    "title": "Selected Stores of Anton Chekhov"
  }, 
  {
    "author": {
      "lastName": "Cussler", 
      "firstName": "Clive"
    }, 
    "title": "Flood Tide"
  }, 
  {
    "author": {
      "lastName": "Child", 
      "firstName": "Lee"
    }, 
    "title": "Worth Dying For.azw"
  }, 
  {
    "author": {
      "lastName": "Connelly", 
      "firstName": "Michael"
    }, 
    "title": "Trunk Music"
  }, 
  {
    "author": {
      "lastName": "Cornwell", 
      "firstName": "Patricia"
    }, 
    "title": "Blow Fly"
  }, 
  {
    "author": {
      "lastName": "Coetzee", 
      "firstName": "J.M."
    }, 
    "title": "Disgrace"
  }, 
  {
    "author": {
      "lastName": "Crais", 
      "firstName": "Robert"
    }, 
    "title": "The Last Detective"
  }, 
  {
    "author": {
      "lastName": "Jacques", 
      "firstName": "Brian"
    }, 
    "title": "Lord Brocktree"
  }, 
  {
    "author": {
      "lastName": "Jordan", 
      "firstName": "Robert"
    }, 
    "title": "The Gathering Storm"
  }, 
  {
    "author": {
      "lastName": "Jacobs", 
      "firstName": "A.J."
    }, 
    "title": "The Year of Living Biblically"
  }, 
  {
    "author": {
      "lastName": "Jacques", 
      "firstName": "Brian"
    }, 
    "title": "Mariel of Redwall"
  }, 
  {
    "author": {
      "lastName": "Jordan", 
      "firstName": "Robert"
    }, 
    "title": "The Path of Daggers"
  }, 
  {
    "author": {
      "lastName": "Jacobsen", 
      "firstName": "Annie"
    }, 
    "title": "Area 51"
  }, 
  {
    "author": {
      "lastName": "Jordan", 
      "firstName": "Robert"
    }, 
    "title": "A Crown of Swords"
  }, 
  {
    "author": {
      "lastName": "Irving", 
      "firstName": "John"
    }, 
    "title": "Last Night in Twisted River"
  }, 
  {
    "author": {
      "lastName": "Junger", 
      "firstName": "Alejandro"
    }, 
    "title": "Clean"
  }, 
  {
    "author": {
      "lastName": "Jacques", 
      "firstName": "Brian"
    }, 
    "title": "Triss"
  }, 
  {
    "author": {
      "lastName": "Jacques", 
      "firstName": "Brian"
    }, 
    "title": "The Pearls of Lutra"
  }, 
  {
    "author": {
      "lastName": "Joyce", 
      "firstName": "James"
    }, 
    "title": "Dubliners"
  }, 
  {
    "author": {
      "lastName": "Jacques", 
      "firstName": "Brian"
    }, 
    "title": "Marlfox"
  }, 
  {
    "author": {
      "lastName": "Jordan", 
      "firstName": "Robert"
    }, 
    "title": "The Great Hunt"
  }, 
  {
    "author": {
      "lastName": "James", 
      "firstName": "Henry"
    }, 
    "title": "Daisy Miller and Other Stories"
  }, 
  {
    "author": {
      "lastName": "Junger", 
      "firstName": "Sebastian"
    }, 
    "title": "War"
  }, 
  {
    "author": {
      "lastName": "Jordan", 
      "firstName": "Robert"
    }, 
    "title": "Winter's Heart"
  }, 
  {
    "author": {
      "lastName": "Jacques", 
      "firstName": "Brian"
    }, 
    "title": "Mossflower"
  }, 
  {
    "author": {
      "lastName": "Jackson", 
      "firstName": "Shirley"
    }, 
    "title": "The Lottery"
  }, 
  {
    "author": {
      "lastName": "Jordan", 
      "firstName": "Robert"
    }, 
    "title": "The Shadow Rising"
  }, 
  {
    "author": {
      "lastName": "Jacques", 
      "firstName": "Brian"
    }, 
    "title": "Salamandastron"
  }, 
  {
    "author": {
      "lastName": "Jordan", 
      "firstName": "Robert"
    }, 
    "title": "Crossroads of Twilight"
  }, 
  {
    "author": {
      "lastName": "Jacques", 
      "firstName": "Brian"
    }, 
    "title": "The Taggerung"
  }, 
  {
    "author": {
      "lastName": "Juster", 
      "firstName": "Norton"
    }, 
    "title": "The Phantom Tollbooth"
  }, 
  {
    "author": {
      "lastName": "Irving", 
      "firstName": "Washington"
    }, 
    "title": "The Legend of Sleepy Hollow"
  }, 
  {
    "author": {
      "lastName": "", 
      "firstName": "Jay"
    }, 
    "title": "Decoded"
  }, 
  {
    "author": {
      "lastName": "Jordan", 
      "firstName": "Robert"
    }, 
    "title": "The Eye of the World"
  }, 
  {
    "author": {
      "lastName": "Jeremy", 
      "firstName": "Ron"
    }, 
    "title": "The Hardest (Working) Man in Showbiz"
  }, 
  {
    "author": {
      "lastName": "Jordan", 
      "firstName": "Robert"
    }, 
    "title": "The Fires of Heaven"
  }, 
  {
    "author": {
      "lastName": "Jordan", 
      "firstName": "Robert"
    }, 
    "title": "Lord of Chaos"
  }, 
  {
    "author": {
      "lastName": "Jacobs", 
      "firstName": "A.J."
    }, 
    "title": "All"
  }, 
  {
    "author": {
      "lastName": "Jacques", 
      "firstName": "Brian"
    }, 
    "title": "Martin the Warrior"
  }, 
  {
    "author": {
      "lastName": "Irving", 
      "firstName": "John"
    }, 
    "title": "A Prayer for Owen Meany"
  }, 
  {
    "author": {
      "lastName": "Joyce", 
      "firstName": "James"
    }, 
    "title": "Ulysses"
  }, 
  {
    "author": {
      "lastName": "Jacques", 
      "firstName": "Brian"
    }, 
    "title": "Redwall"
  }, 
  {
    "author": {
      "lastName": "Jacques", 
      "firstName": "Brian"
    }, 
    "title": "The Outcast of Redwall"
  }, 
  {
    "author": {
      "lastName": "Jacques", 
      "firstName": "Brian"
    }, 
    "title": "Mattimeo"
  }, 
  {
    "author": {
      "lastName": "Jones", 
      "firstName": "Edward P."
    }, 
    "title": "The Known World"
  }, 
  {
    "author": {
      "lastName": "Jensen", 
      "firstName": "Carsten"
    }, 
    "title": "We, the Drowned"
  }, 
  {
    "author": {
      "lastName": "Judd", 
      "firstName": "Ashley"
    }, 
    "title": "All That is Bitter and Sweet"
  }, 
  {
    "author": {
      "lastName": "Jacques", 
      "firstName": "Brian"
    }, 
    "title": "The Bellmaker"
  }, 
  {
    "author": {
      "lastName": "Ishiguro", 
      "firstName": "Kazuo"
    }, 
    "title": "Never Let Me Go"
  }, 
  {
    "author": {
      "lastName": "Jacques", 
      "firstName": "Brian"
    }, 
    "title": "The Long Patrol"
  }, 
  {
    "author": {
      "lastName": "July", 
      "firstName": "Miranda"
    }, 
    "title": "No One Belongs Here More Than You"
  }, 
  {
    "author": {
      "lastName": "Jordan", 
      "firstName": "Robert"
    }, 
    "title": "Knife of Dreams"
  }, 
  {
    "author": {
      "lastName": "Junger", 
      "firstName": "Sebastian"
    }, 
    "title": "The Perfect Storm"
  }, 
  {
    "author": {
      "lastName": "Jensen", 
      "firstName": "Derrick"
    }, 
    "title": "Endgame Vol. 1"
  }, 
  {
    "author": {
      "lastName": "Jordan", 
      "firstName": "Robert"
    }, 
    "title": "The Dragon Reborn"
  }, 
  {
    "author": {
      "lastName": "Jennings", 
      "firstName": "Gary"
    }, 
    "title": "Aztec"
  }, 
  {
    "author": {
      "lastName": "Joyce", 
      "firstName": "James"
    }, 
    "title": "A Portrait of the Artist As a Young Man"
  }, 
  {
    "author": {
      "lastName": "Jordan", 
      "firstName": "Robert"
    }, 
    "title": "New Spring"
  }, 
  {
    "author": {
      "lastName": "Jacques", 
      "firstName": "Brian"
    }, 
    "title": "The Legend of Luke"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Misery"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Drawing of the Three"
  }, 
  {
    "author": {
      "lastName": "Keyes", 
      "firstName": "Marian"
    }, 
    "title": "Watermelon"
  }, 
  {
    "author": {
      "lastName": "Kinsella", 
      "firstName": "Sophie"
    }, 
    "title": "Can You Keep a Secret"
  }, 
  {
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "The Face"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Eyes of the Dragon"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "UR"
  }, 
  {
    "author": {
      "lastName": "Kinsella", 
      "firstName": "Sophie"
    }, 
    "title": "Shopaholic and Sister"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Talisman"
  }, 
  {
    "author": {
      "lastName": "Keyes", 
      "firstName": "Marian"
    }, 
    "title": "Rachel's Holiday"
  }, 
  {
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Velocity"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Rage"
  }, 
  {
    "author": {
      "lastName": "Kay", 
      "firstName": "Guy Gavriel"
    }, 
    "title": "The Darkest Road"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Cujo"
  }, 
  {
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "False Memory"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Firestarter"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Dark Tower"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Duma Key"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Four Past Midnight"
  }, 
  {
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Your Heart Belongs to Me"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Pet Sematary"
  }, 
  {
    "author": {
      "lastName": "Kingsolver", 
      "firstName": "Barbara"
    }, 
    "title": "The Poisonwood Bible"
  }, 
  {
    "author": {
      "lastName": "Kay", 
      "firstName": "Guy Gavriel"
    }, 
    "title": "Tigana"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Dolores Claiborne"
  }, 
  {
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Watchers"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Wolves of the Calla"
  }, 
  {
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Brother Odd"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Insomnia"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Running Man"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Dark Half"
  }, 
  {
    "author": {
      "lastName": "Krauss", 
      "firstName": "Nicole"
    }, 
    "title": "Great House"
  }, 
  {
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Seize the Night"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Night Shift"
  }, 
  {
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "From the Corner of His Eye"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Waste Lands"
  }, 
  {
    "author": {
      "lastName": "Kaku", 
      "firstName": "Michio"
    }, 
    "title": "Physics of the Impossible"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Shining"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Desperation"
  }, 
  {
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "The Taking"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Gunslinger"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Gren Mile"
  }, 
  {
    "author": {
      "lastName": "Kafka", 
      "firstName": "Franz"
    }, 
    "title": "The Metamorphosis and Other Stories"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Hearts In Atlantis"
  }, 
  {
    "author": {
      "lastName": "Krakauer", 
      "firstName": "Jon"
    }, 
    "title": "Where Men Win Glory"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Dreamcatcher"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Dead Zone"
  }, 
  {
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Strangers"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Lisey's Story"
  }, 
  {
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Tick Tock"
  }, 
  {
    "author": {
      "lastName": "Krakauer", 
      "firstName": "Jon"
    }, 
    "title": "Into the Wild"
  }, 
  {
    "author": {
      "lastName": "Kinsella", 
      "firstName": "Sophie"
    }, 
    "title": "Shopaholic Takes Manhattan"
  }, 
  {
    "author": {
      "lastName": "Keyes", 
      "firstName": "Marian"
    }, 
    "title": "Sushi for Beginners"
  }, 
  {
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Odd Hours"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Thinner"
  }, 
  {
    "author": {
      "lastName": "Kerouac", 
      "firstName": "Jack"
    }, 
    "title": "On The Road"
  }, 
  {
    "author": {
      "lastName": "Kerouac", 
      "firstName": "Jack"
    }, 
    "title": "The Dharma Bums"
  }, 
  {
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Relentless"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "From a Buick 8"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Song of Susannah"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Long Walk"
  }, 
  {
    "author": {
      "lastName": "Keyes", 
      "firstName": "Marian"
    }, 
    "title": "The Other Side of the Story"
  }, 
  {
    "author": {
      "lastName": "Kinsella", 
      "firstName": "Sophie"
    }, 
    "title": "Remember Me"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Colorado Kid"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Regulators"
  }, 
  {
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "One Door Away From Heaven"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Girl Who Loved Tom Gordon"
  }, 
  {
    "author": {
      "lastName": "Kay", 
      "firstName": "Guy Gavriel"
    }, 
    "title": "The Wandering Fire"
  }, 
  {
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "The Darkest Evening of the Year"
  }, 
  {
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Mr. Murder"
  }, 
  {
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Fear Nothing"
  }, 
  {
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Forever Odd"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Full Dark, No Stars"
  }, 
  {
    "author": {
      "lastName": "Kinsella", 
      "firstName": "Sophie"
    }, 
    "title": "Confessions of a Shopaholic"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Just After Sunset"
  }, 
  {
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Odd Thomas"
  }, 
  {
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Demon Seed"
  }, 
  {
    "author": {
      "lastName": "Klein", 
      "firstName": "Naomi"
    }, 
    "title": "The Shock Doctrine"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Stand"
  }, 
  {
    "author": {
      "lastName": "Kesey", 
      "firstName": "Ken"
    }, 
    "title": "One Flew Over the Cuckoo's Nest"
  }, 
  {
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Sole Survivor"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Carrie"
  }, 
  {
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "The Door to December"
  }, 
  {
    "author": {
      "lastName": "Kershaw", 
      "firstName": "Ian"
    }, 
    "title": "Hitler"
  }, 
  {
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Intensity"
  }, 
  {
    "author": {
      "lastName": "Krakauer", 
      "firstName": "Jon"
    }, 
    "title": "Under the Banner of Heaven"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Nightmares and Dreamscapes"
  }, 
  {
    "author": {
      "lastName": "Kay", 
      "firstName": "Guy Gavriel"
    }, 
    "title": "Rassan"
  }, 
  {
    "author": {
      "lastName": "Kinsella", 
      "firstName": "Sophie"
    }, 
    "title": "Shopaholic and Baby"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Everything's Eventual"
  }, 
  {
    "author": {
      "lastName": "Kafka", 
      "firstName": "Franz"
    }, 
    "title": "The Trial"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Cycle of the Werewolf"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Wizard and Glass"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Different Seasons"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Cell"
  }, 
  {
    "author": {
      "lastName": "Kingsbury", 
      "firstName": "Karen"
    }, 
    "title": "Unlocked"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Under the Dome"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Roadwork"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "The Tommyknockers"
  }, 
  {
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "The Husband"
  }, 
  {
    "author": {
      "lastName": "Keyes", 
      "firstName": "Marian"
    }, 
    "title": "Last Chance Saloon"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Christine"
  }, 
  {
    "author": {
      "lastName": "Klosterman", 
      "firstName": "Chuck"
    }, 
    "title": "Eating the Dinosaur"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Skeleton Crew"
  }, 
  {
    "author": {
      "lastName": "Kroese", 
      "firstName": "Robert"
    }, 
    "title": "Mercury Falls"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Bag of Bones"
  }, 
  {
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dead"
    }, 
    "title": "By the Light of the Moon"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Rose Madder"
  }, 
  {
    "author": {
      "lastName": "Kinsella", 
      "firstName": "Sophie"
    }, 
    "title": "Shopaholic Ties the Knot"
  }, 
  {
    "author": {
      "lastName": "Keyes", 
      "firstName": "Marian"
    }, 
    "title": "Lucy Sullivan is Getting Married"
  }, 
  {
    "author": {
      "lastName": "Kiyosaki", 
      "firstName": "Robert"
    }, 
    "title": "Rich Dad, Poor Dad"
  }, 
  {
    "author": {
      "lastName": "Koontz", 
      "firstName": "Dean"
    }, 
    "title": "Midnight"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Black House"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Salem's Lot"
  }, 
  {
    "author": {
      "lastName": "Keyes", 
      "firstName": "Marian"
    }, 
    "title": "Anybody Out There"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "It"
  }, 
  {
    "author": {
      "lastName": "Kostova", 
      "firstName": "Elizabeth"
    }, 
    "title": "The Historian"
  }, 
  {
    "author": {
      "lastName": "Kay", 
      "firstName": "Guy Gavriel"
    }, 
    "title": "The Summer Tree"
  }, 
  {
    "author": {
      "lastName": "King", 
      "firstName": "Stephen"
    }, 
    "title": "Gerald's Game"
  }, 
  {
    "author": {
      "lastName": "Orwell", 
      "firstName": "George"
    }, 
    "title": "1984"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Guards! Guards!"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "School Days"
  }, 
  {
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "The Hundred Days"
  }, 
  {
    "author": {
      "lastName": "Puzo", 
      "firstName": "Mario"
    }, 
    "title": "The Godfather"
  }, 
  {
    "author": {
      "lastName": "Palahniuk", 
      "firstName": "Chuck"
    }, 
    "title": "Fight Club"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Valediction"
  }, 
  {
    "author": {
      "lastName": "Preston", 
      "firstName": "Douglas"
    }, 
    "title": "Relic"
  }, 
  {
    "author": {
      "lastName": "Paul", 
      "firstName": "Ron"
    }, 
    "title": "Liberty Defined"
  }, 
  {
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "Suzanne's Diary for Nicholas"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Maskerade"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Widow's Walk"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Night and Day"
  }, 
  {
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "The Mauritius Command"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Eric"
  }, 
  {
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "London Bridges"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Sea Change"
  }, 
  {
    "author": {
      "lastName": "Priest", 
      "firstName": "Cherie"
    }, 
    "title": "Boneshaker"
  }, 
  {
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "The Letter Of Marque"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "The Truth"
  }, 
  {
    "author": {
      "lastName": "Paul", 
      "firstName": "Ron"
    }, 
    "title": "The Revolution"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Ceremony"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Feet of Clay"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "A Savage Place"
  }, 
  {
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "Hide and Seek"
  }, 
  {
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "The Reverse Of The Medal"
  }, 
  {
    "author": {
      "lastName": "Portis", 
      "firstName": "Charles"
    }, 
    "title": "True Grit"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "High Profile"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Night Passage"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Wyrd Sisters"
  }, 
  {
    "author": {
      "lastName": "Preston", 
      "firstName": "Douglas"
    }, 
    "title": "Mount Dragon"
  }, 
  {
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "The Yellow Admiral"
  }, 
  {
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "The Fortune of War"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Monstrous Regiment"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "The Light Fantastic"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "The Professional"
  }, 
  {
    "author": {
      "lastName": "Palahniuk", 
      "firstName": "Chuck"
    }, 
    "title": "Rant"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "I Shall Wear Midnight"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Sudden Mischief"
  }, 
  {
    "author": {
      "lastName": "Pollan", 
      "firstName": "Michael"
    }, 
    "title": "The Omnivore's Dilemma"
  }, 
  {
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "Pop Goes the Weasel"
  }, 
  {
    "author": {
      "lastName": "Orwell", 
      "firstName": "George"
    }, 
    "title": "Animal Farm"
  }, 
  {
    "author": {
      "lastName": "Potzsch", 
      "firstName": "Oliver"
    }, 
    "title": "The Hangman's Daughter"
  }, 
  {
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "Along Came a Spider"
  }, 
  {
    "author": {
      "lastName": "Palahniuk", 
      "firstName": "Chuck"
    }, 
    "title": "Pygmy"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Looking for Rachel Wallace"
  }, 
  {
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "Cradle and All"
  }, 
  {
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "The Surgeon's Mate"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Paper Doll"
  }, 
  {
    "author": {
      "lastName": "Pullman", 
      "firstName": "Philip"
    }, 
    "title": "The Amber Spyglass"
  }, 
  {
    "author": {
      "lastName": "Palahniuk", 
      "firstName": "Chuck"
    }, 
    "title": "Lullaby"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Interesting Times"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "The Amazing Maurice and His Educated Rodents"
  }, 
  {
    "author": {
      "lastName": "Preston", 
      "firstName": "Douglas"
    }, 
    "title": "Gideon's Sword"
  }, 
  {
    "author": {
      "lastName": "Palahniuk", 
      "firstName": "Chuck"
    }, 
    "title": "Invisible Monsters"
  }, 
  {
    "author": {
      "lastName": "Obama", 
      "firstName": "Barack"
    }, 
    "title": "The Audacity of Hope"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Carpe Jugulum"
  }, 
  {
    "author": {
      "lastName": "Palahniuk", 
      "firstName": "Chuck"
    }, 
    "title": "Haunted"
  }, 
  {
    "author": {
      "lastName": "Penny", 
      "firstName": "Louise"
    }, 
    "title": "Still Life"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "A Hat Full Of Sky"
  }, 
  {
    "author": {
      "lastName": "Preston", 
      "firstName": "Douglas"
    }, 
    "title": "Thunderhead"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Stone Cold"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Death in Paradise"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "The Fifth Elephant"
  }, 
  {
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "Four Blind Mice"
  }, 
  {
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "Post Captain"
  }, 
  {
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "The Nutmeg Of Consolation"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Stranger in Paradise"
  }, 
  {
    "author": {
      "lastName": "Plath", 
      "firstName": "Sylvia"
    }, 
    "title": "The Bell Jar"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "God Save the Child"
  }, 
  {
    "author": {
      "lastName": "Pynchon", 
      "firstName": "Thomas"
    }, 
    "title": "Gravity's Rainbow"
  }, 
  {
    "author": {
      "lastName": "Palin", 
      "firstName": "Sarah"
    }, 
    "title": "Going Rogue"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "The Last Hero"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Stardust"
  }, 
  {
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "Blue at the Mizzen"
  }, 
  {
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "Violets Are Blue"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Chance"
  }, 
  {
    "author": {
      "lastName": "Palahniuk", 
      "firstName": "Chuck"
    }, 
    "title": "Diary"
  }, 
  {
    "author": {
      "lastName": "Pynchon", 
      "firstName": "Thomas"
    }, 
    "title": "The Crying of Lot 49"
  }, 
  {
    "author": {
      "lastName": "Palahniuk", 
      "firstName": "Chuck"
    }, 
    "title": "Survivor"
  }, 
  {
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "Treason's Harbour"
  }, 
  {
    "author": {
      "lastName": "Paine", 
      "firstName": "Thomas"
    }, 
    "title": "Common Sense and The Rights of Man"
  }, 
  {
    "author": {
      "lastName": "", 
      "firstName": "Plato"
    }, 
    "title": "The Republic"
  }, 
  {
    "author": {
      "lastName": "O'Connor", 
      "firstName": "Flannery"
    }, 
    "title": "Everything That Rises Must Converge"
  }, 
  {
    "author": {
      "lastName": "Paolini", 
      "firstName": "Christopher"
    }, 
    "title": "Eragon"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Hush Money"
  }, 
  {
    "author": {
      "lastName": "Palahniuk", 
      "firstName": "Chuck"
    }, 
    "title": "Choke"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Double Deuce"
  }, 
  {
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "The Far Side of the World"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Mortal Stakes"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Playmates"
  }, 
  {
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "Jack and Jill"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Mort"
  }, 
  {
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "Dark Sea"
  }, 
  {
    "author": {
      "lastName": "Preston", 
      "firstName": "Douglas"
    }, 
    "title": "Fever Dream"
  }, 
  {
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "Mary, Mary"
  }, 
  {
    "author": {
      "lastName": "Pressfield", 
      "firstName": "Steven"
    }, 
    "title": "Gates of Fire"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Cold Service"
  }, 
  {
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "Cat and Mouse"
  }, 
  {
    "author": {
      "lastName": "Preston", 
      "firstName": "Douglas"
    }, 
    "title": "Dance of Death"
  }, 
  {
    "author": {
      "lastName": "Proust", 
      "firstName": "Marcel"
    }, 
    "title": "Swann's Way"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Hogfather"
  }, 
  {
    "author": {
      "lastName": "Preston", 
      "firstName": "Douglas"
    }, 
    "title": "The Wheel of Darkness"
  }, 
  {
    "author": {
      "lastName": "Poe", 
      "firstName": "Edgar Allan"
    }, 
    "title": "Essential Tales and Poems"
  }, 
  {
    "author": {
      "lastName": "Palahniuk", 
      "firstName": "Chuck"
    }, 
    "title": "All"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Split Image"
  }, 
  {
    "author": {
      "lastName": "Preston", 
      "firstName": "Douglas"
    }, 
    "title": "Reliquary"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Crimson Joy"
  }, 
  {
    "author": {
      "lastName": "Preston", 
      "firstName": "Douglas"
    }, 
    "title": "Cemetery Dance"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Hundred Dollar Baby"
  }, 
  {
    "author": {
      "lastName": "Preston", 
      "firstName": "Richard"
    }, 
    "title": "The Cobra Event"
  }, 
  {
    "author": {
      "lastName": "Palahniuk", 
      "firstName": "Chuck"
    }, 
    "title": "Fugitives and Refugees"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "The Last Continent"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Hugger Mugger"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "The Widening Gyre"
  }, 
  {
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "Roses Are Red"
  }, 
  {
    "author": {
      "lastName": "Pullman", 
      "firstName": "Philip"
    }, 
    "title": "The Subtle Knife"
  }, 
  {
    "author": {
      "lastName": "Patchett", 
      "firstName": "Ann"
    }, 
    "title": "Bel Canto"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Pyramids"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Making Money"
  }, 
  {
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "The Thirteen Gun Salute"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Going Postal"
  }, 
  {
    "author": {
      "lastName": "Pullman", 
      "firstName": "Philip"
    }, 
    "title": "The Golden Compass"
  }, 
  {
    "author": {
      "lastName": "Pelecanos", 
      "firstName": "George"
    }, 
    "title": "Drama City"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Trouble in Paradise"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Soul Music"
  }, 
  {
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "The Ionian Mission"
  }, 
  {
    "author": {
      "lastName": "Pollan", 
      "firstName": "Michael"
    }, 
    "title": "The Botany of Desire"
  }, 
  {
    "author": {
      "lastName": "Perlstein", 
      "firstName": "Rick"
    }, 
    "title": "Nixonland"
  }, 
  {
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "3rd Degree"
  }, 
  {
    "author": {
      "lastName": "O'Connor", 
      "firstName": "Flannery"
    }, 
    "title": "Wise Blood"
  }, 
  {
    "author": {
      "lastName": "Pirsig", 
      "firstName": "Robert M."
    }, 
    "title": "Zen and the Art of Motorcycle Maintenance"
  }, 
  {
    "author": {
      "lastName": "Preston", 
      "firstName": "Douglas"
    }, 
    "title": "The Cabinent of Curiosities"
  }, 
  {
    "author": {
      "lastName": "Preston", 
      "firstName": "Douglas"
    }, 
    "title": "The Book of the Dead"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Pastime"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Rough Weather"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "The Colour of Magic"
  }, 
  {
    "author": {
      "lastName": "Paul", 
      "firstName": "Ron"
    }, 
    "title": "End the Fed"
  }, 
  {
    "author": {
      "lastName": "Osbourne", 
      "firstName": "Ozzy"
    }, 
    "title": "I Am Ozzy"
  }, 
  {
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "1st to Die"
  }, 
  {
    "author": {
      "lastName": "Palahniuk", 
      "firstName": "Chuck"
    }, 
    "title": "Snuff"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "The Godwulf Manuscript"
  }, 
  {
    "author": {
      "lastName": "Picoult", 
      "firstName": "Jodi"
    }, 
    "title": "The Pact"
  }, 
  {
    "author": {
      "lastName": "Preston", 
      "firstName": "Douglas"
    }, 
    "title": "Brimstone"
  }, 
  {
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "Witch and Wizard"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Men at Arms"
  }, 
  {
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "Beach Road"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Wintersmith"
  }, 
  {
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "The Beach House"
  }, 
  {
    "author": {
      "lastName": "Prose", 
      "firstName": "Francine"
    }, 
    "title": "Reading Like a Writer"
  }, 
  {
    "author": {
      "lastName": "O'Neill", 
      "firstName": "Joseph"
    }, 
    "title": "Netherland"
  }, 
  {
    "author": {
      "lastName": "Preston", 
      "firstName": "Douglas"
    }, 
    "title": "The Ice Limit"
  }, 
  {
    "author": {
      "lastName": "Pollan", 
      "firstName": "Michael"
    }, 
    "title": "In Defense of Food"
  }, 
  {
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "H.M.S. Surprise"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Witches Abroad"
  }, 
  {
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "The Lake House"
  }, 
  {
    "author": {
      "lastName": "Pausch", 
      "firstName": "Randy"
    }, 
    "title": "The Last Lecture"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Sourcery"
  }, 
  {
    "author": {
      "lastName": "Picoult", 
      "firstName": "Jodi"
    }, 
    "title": "Nineteen Minutes"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "The Wee Free Men"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Thud!"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Jingo"
  }, 
  {
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "Master and Commander"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Thin Air"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Lords and Ladies"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Walking Shadow"
  }, 
  {
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "2nd Chance"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Thief of Time"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Promised Land"
  }, 
  {
    "author": {
      "lastName": "Paolini", 
      "firstName": "Christopher"
    }, 
    "title": "Brisingr"
  }, 
  {
    "author": {
      "lastName": "Picoult", 
      "firstName": "Jodi"
    }, 
    "title": "My Sister's Keeper"
  }, 
  {
    "author": {
      "lastName": "Obreht", 
      "firstName": "Tea"
    }, 
    "title": "The Tiger's Wife"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Potshot"
  }, 
  {
    "author": {
      "lastName": "Preston", 
      "firstName": "Richard"
    }, 
    "title": "The Hot Zone"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Early Autumn"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Pale Kings and Princes"
  }, 
  {
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "Desolation Island"
  }, 
  {
    "author": {
      "lastName": "Pierre", 
      "firstName": "DBC"
    }, 
    "title": "Vernon God Little"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Now and Then"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Moving Pictures"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Equal Rites"
  }, 
  {
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "Kiss the Girls"
  }, 
  {
    "author": {
      "lastName": "Paolini", 
      "firstName": "Christopher"
    }, 
    "title": "Eldest"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "A Catskill Eagle"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Painted Ladies"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "The Judas Goat"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Reaper Man"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Unseen Academicals"
  }, 
  {
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "Clarissa Oakes"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Bad Business"
  }, 
  {
    "author": {
      "lastName": "O'Brian", 
      "firstName": "Patrick"
    }, 
    "title": "The Commodore"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Night Watch"
  }, 
  {
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "The Big Bad Wolf"
  }, 
  {
    "author": {
      "lastName": "Preston", 
      "firstName": "Douglas"
    }, 
    "title": "Still Life With Crows"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Back Story"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Taming a Sea Horse"
  }, 
  {
    "author": {
      "lastName": "Percy", 
      "firstName": "Walker"
    }, 
    "title": "Lost in the Cosmos"
  }, 
  {
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "When the Wind Blows"
  }, 
  {
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "Cross"
  }, 
  {
    "author": {
      "lastName": "Patterson", 
      "firstName": "James"
    }, 
    "title": "Judge and Jury"
  }, 
  {
    "author": {
      "lastName": "Pratchett", 
      "firstName": "Terry"
    }, 
    "title": "Small Gods"
  }, 
  {
    "author": {
      "lastName": "Pelecanos", 
      "firstName": "George"
    }, 
    "title": "Shame the Devil"
  }, 
  {
    "author": {
      "lastName": "Pynchon", 
      "firstName": "Thomas"
    }, 
    "title": "V"
  }, 
  {
    "author": {
      "lastName": "Oswalt", 
      "firstName": "Patton"
    }, 
    "title": "Zombie Spaceship Wasteland"
  }, 
  {
    "author": {
      "lastName": "Preston", 
      "firstName": "Douglas"
    }, 
    "title": "Riptide"
  }, 
  {
    "author": {
      "lastName": "Parker", 
      "firstName": "Robert B"
    }, 
    "title": "Small Vices"
  }, 
  {
    "author": {
      "lastName": "Hawking", 
      "firstName": "Stephen"
    }, 
    "title": "The Grand Design"
  }, 
  {
    "author": {
      "lastName": "Harrison", 
      "firstName": "Kim"
    }, 
    "title": "For a Few Demons More"
  }, 
  {
    "author": {
      "lastName": "Hobb", 
      "firstName": "Robin"
    }, 
    "title": "Royal Assassin"
  }, 
  {
    "author": {
      "lastName": "Harkness", 
      "firstName": "Deborah"
    }, 
    "title": "A Discovery of Witches"
  }, 
  {
    "author": {
      "lastName": "Hitchens", 
      "firstName": "Christopher"
    }, 
    "title": "22"
  }, 
  {
    "author": {
      "lastName": "Harris", 
      "firstName": "Charlaine"
    }, 
    "title": "Dead Reckoning"
  }, 
  {
    "author": {
      "lastName": "Hiaasen", 
      "firstName": "Carl"
    }, 
    "title": "Double Whammy"
  }, 
  {
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Circus of the Damned"
  }, 
  {
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Flirt"
  }, 
  {
    "author": {
      "lastName": "Harrison", 
      "firstName": "Kim"
    }, 
    "title": "Dead Witch Walking"
  }, 
  {
    "author": {
      "lastName": "Hunter", 
      "firstName": "Stephen"
    }, 
    "title": "Point Of Impact"
  }, 
  {
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "A Caress of Twilight"
  }, 
  {
    "author": {
      "lastName": "Harris", 
      "firstName": "Thomas"
    }, 
    "title": "The Silence of the Lambs"
  }, 
  {
    "author": {
      "lastName": "Harrison", 
      "firstName": "Kim"
    }, 
    "title": "The Good, The Bad, and the Undead"
  }, 
  {
    "author": {
      "lastName": "Handler", 
      "firstName": "Chelsea"
    }, 
    "title": "Lies That Chelsea Handler Told Me"
  }, 
  {
    "author": {
      "lastName": "Heller", 
      "firstName": "Joseph"
    }, 
    "title": "22"
  }, 
  {
    "author": {
      "lastName": "Hosseini", 
      "firstName": "Khaled"
    }, 
    "title": "A Thousand Splendid Suns"
  }, 
  {
    "author": {
      "lastName": "", 
      "firstName": "Homer"
    }, 
    "title": "The Odyssey"
  }, 
  {
    "author": {
      "lastName": "Hemingway", 
      "firstName": "Ernest"
    }, 
    "title": "A Farewell to Arms"
  }, 
  {
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Danse Macabre"
  }, 
  {
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "The Lunatic Cafe"
  }, 
  {
    "author": {
      "lastName": "Harris", 
      "firstName": "Charlaine"
    }, 
    "title": "From Dead to Worse"
  }, 
  {
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "A Stroke of Midnight"
  }, 
  {
    "author": {
      "lastName": "Hiaasen", 
      "firstName": "Carl"
    }, 
    "title": "Basket Case"
  }, 
  {
    "author": {
      "lastName": "Huston", 
      "firstName": "Charlie"
    }, 
    "title": "Six Bad Things"
  }, 
  {
    "author": {
      "lastName": "Harris", 
      "firstName": "Charlaine"
    }, 
    "title": "Club Dead"
  }, 
  {
    "author": {
      "lastName": "Hitchens", 
      "firstName": "Christopher"
    }, 
    "title": "The Portable Atheist"
  }, 
  {
    "author": {
      "lastName": "Handler", 
      "firstName": "Chelsea"
    }, 
    "title": "My Horizontal Life, A Collection of One Night Stands"
  }, 
  {
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Incubus Dreams"
  }, 
  {
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Obsidian Butterfly"
  }, 
  {
    "author": {
      "lastName": "Hiaasen", 
      "firstName": "Carl"
    }, 
    "title": "Stormy Weather"
  }, 
  {
    "author": {
      "lastName": "Harris", 
      "firstName": "Charlaine"
    }, 
    "title": "Dead as a Doornail"
  }, 
  {
    "author": {
      "lastName": "Harrison", 
      "firstName": "Kim"
    }, 
    "title": "White Witch Black Curse"
  }, 
  {
    "author": {
      "lastName": "Haley", 
      "firstName": "Alex"
    }, 
    "title": "Roots"
  }, 
  {
    "author": {
      "lastName": "Herbert", 
      "firstName": "Frank"
    }, 
    "title": "Chapterhouse Dune"
  }, 
  {
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Cerulean Sins"
  }, 
  {
    "author": {
      "lastName": "Hiaasen", 
      "firstName": "Carl"
    }, 
    "title": "Skinny Dip"
  }, 
  {
    "author": {
      "lastName": "Hirsi Ali", 
      "firstName": "Ayaan"
    }, 
    "title": "Infidel"
  }, 
  {
    "author": {
      "lastName": "Hosseini", 
      "firstName": "Khaled"
    }, 
    "title": "The Kite Runner"
  }, 
  {
    "author": {
      "lastName": "Huston", 
      "firstName": "Charlie"
    }, 
    "title": "A Dangerous Man"
  }, 
  {
    "author": {
      "lastName": "Halpern", 
      "firstName": "Justin"
    }, 
    "title": "Shit My Dad Says"
  }, 
  {
    "author": {
      "lastName": "Hobb", 
      "firstName": "Robin"
    }, 
    "title": "Dragon Haven"
  }, 
  {
    "author": {
      "lastName": "Hemingway", 
      "firstName": "Ernest"
    }, 
    "title": "A Moveable Feast"
  }, 
  {
    "author": {
      "lastName": "Harris", 
      "firstName": "Sam"
    }, 
    "title": "The Moral Landscape"
  }, 
  {
    "author": {
      "lastName": "Hobb", 
      "firstName": "Robin"
    }, 
    "title": "Assassin's Apprentice"
  }, 
  {
    "author": {
      "lastName": "Harris", 
      "firstName": "Charlaine"
    }, 
    "title": "Dead and Gone"
  }, 
  {
    "author": {
      "lastName": "Hobb", 
      "firstName": "Robin"
    }, 
    "title": "Mad Ship"
  }, 
  {
    "author": {
      "lastName": "Hinton", 
      "firstName": "S.E."
    }, 
    "title": "The Outsiders"
  }, 
  {
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Burnt Offerings"
  }, 
  {
    "author": {
      "lastName": "Hobb", 
      "firstName": "Robin"
    }, 
    "title": "Ship of Destiny"
  }, 
  {
    "author": {
      "lastName": "Hill", 
      "firstName": "Joe"
    }, 
    "title": "Shaped Box"
  }, 
  {
    "author": {
      "lastName": "Huffington", 
      "firstName": "Arianna"
    }, 
    "title": "Third World America"
  }, 
  {
    "author": {
      "lastName": "Harris", 
      "firstName": "Charlaine"
    }, 
    "title": "Dead in the Family"
  }, 
  {
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Micah"
  }, 
  {
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Skin Trade"
  }, 
  {
    "author": {
      "lastName": "Hawking", 
      "firstName": "Stephen"
    }, 
    "title": "A Brief History of Time"
  }, 
  {
    "author": {
      "lastName": "Harris", 
      "firstName": "Thomas"
    }, 
    "title": "Hannibal"
  }, 
  {
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Narcissus in Chains"
  }, 
  {
    "author": {
      "lastName": "Hedges", 
      "firstName": "Chris"
    }, 
    "title": "Death of the Liberal Class"
  }, 
  {
    "author": {
      "lastName": "Huston", 
      "firstName": "Charlie"
    }, 
    "title": "The Mystic Arts of Erasing All Signs of Death"
  }, 
  {
    "author": {
      "lastName": "Hawthorne", 
      "firstName": "Nathaniel"
    }, 
    "title": "The Scarlet Letter"
  }, 
  {
    "author": {
      "lastName": "Huston", 
      "firstName": "Charlie"
    }, 
    "title": "Half the Blood of Brooklyn"
  }, 
  {
    "author": {
      "lastName": "Hardy", 
      "firstName": "Thomas"
    }, 
    "title": "Tess of the D'Urbervilles"
  }, 
  {
    "author": {
      "lastName": "Huston", 
      "firstName": "Charlie"
    }, 
    "title": "The Shotgun Rule"
  }, 
  {
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "The Killing Dance"
  }, 
  {
    "author": {
      "lastName": "Harris", 
      "firstName": "Robert"
    }, 
    "title": "Fatherland"
  }, 
  {
    "author": {
      "lastName": "Hobb", 
      "firstName": "Robin"
    }, 
    "title": "Golden Fool"
  }, 
  {
    "author": {
      "lastName": "Hagar", 
      "firstName": "Sammy"
    }, 
    "title": "Red"
  }, 
  {
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "A Lick of Frost"
  }, 
  {
    "author": {
      "lastName": "Handler", 
      "firstName": "Chelsea"
    }, 
    "title": "Are You There, Vodka. It's Me, Chelsea"
  }, 
  {
    "author": {
      "lastName": "Herbert", 
      "firstName": "Frank"
    }, 
    "title": "Dune Messiah"
  }, 
  {
    "author": {
      "lastName": "Heather", 
      "firstName": "Peter"
    }, 
    "title": "The Fall of the Roman Empire"
  }, 
  {
    "author": {
      "lastName": "Hornby", 
      "firstName": "Nick"
    }, 
    "title": "Fever Pitch"
  }, 
  {
    "author": {
      "lastName": "Haldeman", 
      "firstName": "Joe"
    }, 
    "title": "The Forever War"
  }, 
  {
    "author": {
      "lastName": "Harris", 
      "firstName": "Charlaine"
    }, 
    "title": "All Together Dead"
  }, 
  {
    "author": {
      "lastName": "Harrison", 
      "firstName": "Kim"
    }, 
    "title": "Every Which Way But Dead"
  }, 
  {
    "author": {
      "lastName": "Harrison", 
      "firstName": "Kim"
    }, 
    "title": "Black Magic Sanction"
  }, 
  {
    "author": {
      "lastName": "Huston", 
      "firstName": "Charlie"
    }, 
    "title": "My Dead Body"
  }, 
  {
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "The Laughing Corpse"
  }, 
  {
    "author": {
      "lastName": "Herbert", 
      "firstName": "Frank"
    }, 
    "title": "Dune"
  }, 
  {
    "author": {
      "lastName": "Huston", 
      "firstName": "Charlie"
    }, 
    "title": "Sleepless"
  }, 
  {
    "author": {
      "lastName": "Hemingway", 
      "firstName": "Ernest"
    }, 
    "title": "The Old Man and the Sea"
  }, 
  {
    "author": {
      "lastName": "Hill", 
      "firstName": "Joe"
    }, 
    "title": "Horns"
  }, 
  {
    "author": {
      "lastName": "Hillenbrand", 
      "firstName": "Laura"
    }, 
    "title": "Unbroken, A World War II Story of Survival"
  }, 
  {
    "author": {
      "lastName": "Hobb", 
      "firstName": "Robin"
    }, 
    "title": "Ship of Magic"
  }, 
  {
    "author": {
      "lastName": "Hugo", 
      "firstName": "Victor"
    }, 
    "title": "The Hunchback of Notre Dame"
  }, 
  {
    "author": {
      "lastName": "Harrison", 
      "firstName": "Kim"
    }, 
    "title": "A Fistful of Charms"
  }, 
  {
    "author": {
      "lastName": "Harris", 
      "firstName": "Charlaine"
    }, 
    "title": "Dead to the World"
  }, 
  {
    "author": {
      "lastName": "Herbert", 
      "firstName": "Frank"
    }, 
    "title": "God Emperor of Dune"
  }, 
  {
    "author": {
      "lastName": "Hiaasen", 
      "firstName": "Carl"
    }, 
    "title": "Sick Puppy"
  }, 
  {
    "author": {
      "lastName": "Handler", 
      "firstName": "Chelsea"
    }, 
    "title": "Chelsea Chelsea Bang Bang"
  }, 
  {
    "author": {
      "lastName": "Harris", 
      "firstName": "Charlaine"
    }, 
    "title": "Dead Until Dark"
  }, 
  {
    "author": {
      "lastName": "Hemingway", 
      "firstName": "Ernest"
    }, 
    "title": "For Whom the Bell Tolls"
  }, 
  {
    "author": {
      "lastName": "Harris", 
      "firstName": "Thomas"
    }, 
    "title": "Red Dragon"
  }, 
  {
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Guilty Pleasures"
  }, 
  {
    "author": {
      "lastName": "Huston", 
      "firstName": "Charlie"
    }, 
    "title": "Already Dead"
  }, 
  {
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "A Kiss of Shadows"
  }, 
  {
    "author": {
      "lastName": "Hobb", 
      "firstName": "Robin"
    }, 
    "title": "Dragon Keeper"
  }, 
  {
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Seduced by Moonlight"
  }, 
  {
    "author": {
      "lastName": "Hemingway", 
      "firstName": "Ernest"
    }, 
    "title": "The Sun Also Rises"
  }, 
  {
    "author": {
      "lastName": "", 
      "firstName": "Homer"
    }, 
    "title": "The Iliad"
  }, 
  {
    "author": {
      "lastName": "Harrison", 
      "firstName": "Kim"
    }, 
    "title": "Pale Demon"
  }, 
  {
    "author": {
      "lastName": "Huxley", 
      "firstName": "Aldous"
    }, 
    "title": "Brave New World"
  }, 
  {
    "author": {
      "lastName": "Harrison", 
      "firstName": "Kim"
    }, 
    "title": "The Outlaw Demon Wails"
  }, 
  {
    "author": {
      "lastName": "Hale", 
      "firstName": "Benjamin"
    }, 
    "title": "The Evolution of Bruno Littlemore"
  }, 
  {
    "author": {
      "lastName": "Heilemann", 
      "firstName": "John"
    }, 
    "title": "Game Change"
  }, 
  {
    "author": {
      "lastName": "Hornby", 
      "firstName": "Nick"
    }, 
    "title": "About a Boy"
  }, 
  {
    "author": {
      "lastName": "Hammett", 
      "firstName": "Dashiell"
    }, 
    "title": "The Maltese Falcon"
  }, 
  {
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Divine Misdemeanors"
  }, 
  {
    "author": {
      "lastName": "Hiaasen", 
      "firstName": "Carl"
    }, 
    "title": "Tourist Season"
  }, 
  {
    "author": {
      "lastName": "Hobb", 
      "firstName": "Robin"
    }, 
    "title": "Fool's Fate"
  }, 
  {
    "author": {
      "lastName": "Huston", 
      "firstName": "Charlie"
    }, 
    "title": "Every Last Drop"
  }, 
  {
    "author": {
      "lastName": "Hobb", 
      "firstName": "Robin"
    }, 
    "title": "Fool's Errand"
  }, 
  {
    "author": {
      "lastName": "Harding", 
      "firstName": "Paul"
    }, 
    "title": "Tinkers"
  }, 
  {
    "author": {
      "lastName": "Hornby", 
      "firstName": "Nick"
    }, 
    "title": "High Fidelity"
  }, 
  {
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Blue Moon"
  }, 
  {
    "author": {
      "lastName": "Hurston", 
      "firstName": "Zora Neale"
    }, 
    "title": "Their Eyes Were Watching God"
  }, 
  {
    "author": {
      "lastName": "Hitchens", 
      "firstName": "Christopher"
    }, 
    "title": "God is Not Great"
  }, 
  {
    "author": {
      "lastName": "Hedges", 
      "firstName": "Chris"
    }, 
    "title": "The World As It Is"
  }, 
  {
    "author": {
      "lastName": "Hugo", 
      "firstName": "Victor"
    }, 
    "title": "Les Miserables"
  }, 
  {
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Bullet"
  }, 
  {
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "The Harlequin"
  }, 
  {
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Blood Noir"
  }, 
  {
    "author": {
      "lastName": "Hobb", 
      "firstName": "Robin"
    }, 
    "title": "Assassin's Quest"
  }, 
  {
    "author": {
      "lastName": "Herbert", 
      "firstName": "Frank"
    }, 
    "title": "Children of Dune"
  }, 
  {
    "author": {
      "lastName": "Huston", 
      "firstName": "Charlie"
    }, 
    "title": "Caught Stealing"
  }, 
  {
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Mistral's Kiss"
  }, 
  {
    "author": {
      "lastName": "Harris", 
      "firstName": "Charlaine"
    }, 
    "title": "Definitely Dead"
  }, 
  {
    "author": {
      "lastName": "Harris", 
      "firstName": "Charlaine"
    }, 
    "title": "Living Dead in Dallas"
  }, 
  {
    "author": {
      "lastName": "Hazlitt", 
      "firstName": "Henry"
    }, 
    "title": "Economics in One Lesson"
  }, 
  {
    "author": {
      "lastName": "Huston", 
      "firstName": "Charlie"
    }, 
    "title": "No Dominion"
  }, 
  {
    "author": {
      "lastName": "Herbert", 
      "firstName": "Frank"
    }, 
    "title": "Heretics of Dune"
  }, 
  {
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Bloody Bones"
  }, 
  {
    "author": {
      "lastName": "Heinlein", 
      "firstName": "Robert. A"
    }, 
    "title": "The Moon Is a Harsh Mistress"
  }, 
  {
    "author": {
      "lastName": "Hesse", 
      "firstName": "Hermann"
    }, 
    "title": "Siddhartha"
  }, 
  {
    "author": {
      "lastName": "Hamilton", 
      "firstName": "Laurell K."
    }, 
    "title": "Swallowing Darkness"
  }, 
  {
    "author": {
      "lastName": "", 
      "firstName": "Malcom X"
    }, 
    "title": "The Autobiography of Malcolm X"
  }, 
  {
    "author": {
      "lastName": "Moning", 
      "firstName": "Karen Marie"
    }, 
    "title": "Dreamfever"
  }, 
  {
    "author": {
      "lastName": "McCain", 
      "firstName": "Meghan"
    }, 
    "title": "Dirty Sexy Politics"
  }, 
  {
    "author": {
      "lastName": "Meyer", 
      "firstName": "Stephanie"
    }, 
    "title": "Twilight"
  }, 
  {
    "author": {
      "lastName": "Mieville", 
      "firstName": "China"
    }, 
    "title": "Kraken"
  }, 
  {
    "author": {
      "lastName": "Mailer", 
      "firstName": "Norman"
    }, 
    "title": "The Naked and the Dead"
  }, 
  {
    "author": {
      "lastName": "McEwan", 
      "firstName": "Ian"
    }, 
    "title": "Solar"
  }, 
  {
    "author": {
      "lastName": "Martin", 
      "firstName": "George R.R."
    }, 
    "title": "A Clash of Kings"
  }, 
  {
    "author": {
      "lastName": "Moore", 
      "firstName": "Christopher"
    }, 
    "title": "Fool"
  }, 
  {
    "author": {
      "lastName": "Morris", 
      "firstName": "Edmund"
    }, 
    "title": "Colonel Roosevelt"
  }, 
  {
    "author": {
      "lastName": "Martin", 
      "firstName": "Steve"
    }, 
    "title": "An Object of Beauty"
  }, 
  {
    "author": {
      "lastName": "", 
      "firstName": "Misc."
    }, 
    "title": "Machine of Death"
  }, 
  {
    "author": {
      "lastName": "Mankell", 
      "firstName": "Henning"
    }, 
    "title": "Firewall"
  }, 
  {
    "author": {
      "lastName": "McLaughlin", 
      "firstName": "Emma"
    }, 
    "title": "The Nanny Diaries"
  }, 
  {
    "author": {
      "lastName": "McCarthy", 
      "firstName": "Cormac"
    }, 
    "title": "The Road"
  }, 
  {
    "author": {
      "lastName": "Mitchell", 
      "firstName": "Margaret"
    }, 
    "title": "Gone with the Wind"
  }, 
  {
    "author": {
      "lastName": "Melville", 
      "firstName": "Herman"
    }, 
    "title": "Moby Dick"
  }, 
  {
    "author": {
      "lastName": "Mieville", 
      "firstName": "China"
    }, 
    "title": "The City & The City"
  }, 
  {
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "Bye"
  }, 
  {
    "author": {
      "lastName": "Nix", 
      "firstName": "Garth"
    }, 
    "title": "Abhorsen"
  }, 
  {
    "author": {
      "lastName": "Moore", 
      "firstName": "Christopher"
    }, 
    "title": "Bloodsucking Fiends"
  }, 
  {
    "author": {
      "lastName": "McDougall", 
      "firstName": "Christopher"
    }, 
    "title": "Born to Run"
  }, 
  {
    "author": {
      "lastName": "Max", 
      "firstName": "Tucker"
    }, 
    "title": "I Hope They Serve Beer In Hell"
  }, 
  {
    "author": {
      "lastName": "Mallory", 
      "firstName": "H.P."
    }, 
    "title": "Toil and Trouble"
  }, 
  {
    "author": {
      "lastName": "Miller", 
      "firstName": "Walter M."
    }, 
    "title": "A Canticle for Leibowitz"
  }, 
  {
    "author": {
      "lastName": "Mankell", 
      "firstName": "Henning"
    }, 
    "title": "One Step Behind"
  }, 
  {
    "author": {
      "lastName": "Niffenegger", 
      "firstName": "Audrey"
    }, 
    "title": "The Time Traveler's Wife"
  }, 
  {
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "The Quick Red Fox"
  }, 
  {
    "author": {
      "lastName": "Martin", 
      "firstName": "George R.R."
    }, 
    "title": "The Hedge Knight"
  }, 
  {
    "author": {
      "lastName": "Neilan", 
      "firstName": "Paul"
    }, 
    "title": "Apathy and Other Small Victories"
  }, 
  {
    "author": {
      "lastName": "Martin", 
      "firstName": "George R.R."
    }, 
    "title": "A Game Of Thrones"
  }, 
  {
    "author": {
      "lastName": "Moning", 
      "firstName": "Karen Marie"
    }, 
    "title": "Darkfever"
  }, 
  {
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "Nightmare In Pink"
  }, 
  {
    "author": {
      "lastName": "Mieville", 
      "firstName": "China"
    }, 
    "title": "The Scar"
  }, 
  {
    "author": {
      "lastName": "Martin", 
      "firstName": "George R.R."
    }, 
    "title": "A Feast for Crows"
  }, 
  {
    "author": {
      "lastName": "Marquez", 
      "firstName": "Gabriel Garcia"
    }, 
    "title": "One Hundred Years of Solitude"
  }, 
  {
    "author": {
      "lastName": "Maugham", 
      "firstName": "W. Somerset"
    }, 
    "title": "The Razor's Edge"
  }, 
  {
    "author": {
      "lastName": "Moning", 
      "firstName": "Karen Marie"
    }, 
    "title": "Bloodfever"
  }, 
  {
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "The Scarlet Ruse"
  }, 
  {
    "author": {
      "lastName": "Martin", 
      "firstName": "Demetri"
    }, 
    "title": "This Is a Book"
  }, 
  {
    "author": {
      "lastName": "Mankell", 
      "firstName": "Henning"
    }, 
    "title": "Sidetracked"
  }, 
  {
    "author": {
      "lastName": "Mankell", 
      "firstName": "Henning"
    }, 
    "title": "The Man Who Smiled"
  }, 
  {
    "author": {
      "lastName": "Nabokov", 
      "firstName": "Vladimir"
    }, 
    "title": "Lolita"
  }, 
  {
    "author": {
      "lastName": "Mankell", 
      "firstName": "Henning"
    }, 
    "title": "The Dogs of Riga"
  }, 
  {
    "author": {
      "lastName": "Nozick", 
      "firstName": "Robert"
    }, 
    "title": "Anarchy, State, and Utopia"
  }, 
  {
    "author": {
      "lastName": "Morgan", 
      "firstName": "Richard"
    }, 
    "title": "Broken Angels"
  }, 
  {
    "author": {
      "lastName": "Nietzsche", 
      "firstName": "Friedrich"
    }, 
    "title": "Beyond Good and Evil"
  }, 
  {
    "author": {
      "lastName": "Moore", 
      "firstName": "Christopher"
    }, 
    "title": "The Lust Lizard of Melancholy Cove"
  }, 
  {
    "author": {
      "lastName": "McCullough", 
      "firstName": "Colleen"
    }, 
    "title": "The First Man in Rome"
  }, 
  {
    "author": {
      "lastName": "McLain", 
      "firstName": "Paula"
    }, 
    "title": "The Paris Wife"
  }, 
  {
    "author": {
      "lastName": "Meyer", 
      "firstName": "Stephanie"
    }, 
    "title": "The Short Second Life of Bree Tanner"
  }, 
  {
    "author": {
      "lastName": "Morris", 
      "firstName": "Edmund"
    }, 
    "title": "The Rise of Theodore Roosevelt"
  }, 
  {
    "author": {
      "lastName": "Maugham", 
      "firstName": "W. Somerset"
    }, 
    "title": "Of Human Bondage"
  }, 
  {
    "author": {
      "lastName": "Marquez", 
      "firstName": "Gabriel Garcia"
    }, 
    "title": "Love in the Time of Cholera"
  }, 
  {
    "author": {
      "lastName": "Metaxas", 
      "firstName": "Eric"
    }, 
    "title": "Bonhoeffer"
  }, 
  {
    "author": {
      "lastName": "McCammon", 
      "firstName": "Robert R."
    }, 
    "title": "Swan Song"
  }, 
  {
    "author": {
      "lastName": "Morrell", 
      "firstName": "David"
    }, 
    "title": "Creepers"
  }, 
  {
    "author": {
      "lastName": "McCarthy", 
      "firstName": "Cormac"
    }, 
    "title": "Blood Meridian"
  }, 
  {
    "author": {
      "lastName": "Mallory", 
      "firstName": "H.P."
    }, 
    "title": "Fire Burn and Cauldron Bubble"
  }, 
  {
    "author": {
      "lastName": "Moore", 
      "firstName": "Christopher"
    }, 
    "title": "Bite Me"
  }, 
  {
    "author": {
      "lastName": "Mitchell", 
      "firstName": "David"
    }, 
    "title": "Cloud Atlas"
  }, 
  {
    "author": {
      "lastName": "", 
      "firstName": "Madonna"
    }, 
    "title": "Sex"
  }, 
  {
    "author": {
      "lastName": "McMillan", 
      "firstName": "Terry"
    }, 
    "title": "A Day Late and a Dollar Short"
  }, 
  {
    "author": {
      "lastName": "Morris", 
      "firstName": "Edmund"
    }, 
    "title": "Theodore Rex"
  }, 
  {
    "author": {
      "lastName": "McKenna", 
      "firstName": "Terence"
    }, 
    "title": "Food of the Gods"
  }, 
  {
    "author": {
      "lastName": "Moning", 
      "firstName": "Karen Marie"
    }, 
    "title": "Shadowfever"
  }, 
  {
    "author": {
      "lastName": "Moning", 
      "firstName": "Karen Marie"
    }, 
    "title": "Faefever"
  }, 
  {
    "author": {
      "lastName": "Mankell", 
      "firstName": "Henning"
    }, 
    "title": "Faceless Killers"
  }, 
  {
    "author": {
      "lastName": "Martin", 
      "firstName": "George R.R."
    }, 
    "title": "A Storm of Swords"
  }, 
  {
    "author": {
      "lastName": "Miller", 
      "firstName": "Arthur"
    }, 
    "title": "The Crucible"
  }, 
  {
    "author": {
      "lastName": "Mankell", 
      "firstName": "Henning"
    }, 
    "title": "The Pyramid"
  }, 
  {
    "author": {
      "lastName": "Meyer", 
      "firstName": "Stephanie"
    }, 
    "title": "Eclipse"
  }, 
  {
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "The Green Ripper"
  }, 
  {
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "Free Fall in Crimson"
  }, 
  {
    "author": {
      "lastName": "Nemirovsky", 
      "firstName": "Irene"
    }, 
    "title": "Suite Francaise"
  }, 
  {
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "The Girl in the Plain Brown Wrapper"
  }, 
  {
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "A Purple Place For Dying"
  }, 
  {
    "author": {
      "lastName": "Mieville", 
      "firstName": "China"
    }, 
    "title": "Perdido Street Station"
  }, 
  {
    "author": {
      "lastName": "Martin", 
      "firstName": "George R.R."
    }, 
    "title": "A Dance With Dragons.pdf"
  }, 
  {
    "author": {
      "lastName": "Meyer", 
      "firstName": "Stephanie"
    }, 
    "title": "The Host"
  }, 
  {
    "author": {
      "lastName": "Mankell", 
      "firstName": "Henning"
    }, 
    "title": "The White Lioness"
  }, 
  {
    "author": {
      "lastName": "McCullough", 
      "firstName": "David"
    }, 
    "title": "John Adams"
  }, 
  {
    "author": {
      "lastName": "Mukherjee", 
      "firstName": "Siddhartha"
    }, 
    "title": "The Emperor of All Maladies"
  }, 
  {
    "author": {
      "lastName": "McCullough", 
      "firstName": "Colleen"
    }, 
    "title": "Caesar"
  }, 
  {
    "author": {
      "lastName": "Mieville", 
      "firstName": "China"
    }, 
    "title": "Iron Council"
  }, 
  {
    "author": {
      "lastName": "Max", 
      "firstName": "Tucker"
    }, 
    "title": "Assholes Finish First"
  }, 
  {
    "author": {
      "lastName": "Mankell", 
      "firstName": "Henning"
    }, 
    "title": "The Fifth Woman"
  }, 
  {
    "author": {
      "lastName": "Macomber", 
      "firstName": "Debbie"
    }, 
    "title": "A Turn in the Road"
  }, 
  {
    "author": {
      "lastName": "Morgan", 
      "firstName": "Richard"
    }, 
    "title": "Altered Carbon"
  }, 
  {
    "author": {
      "lastName": "Murakami", 
      "firstName": "Haruki"
    }, 
    "title": "Norwegian Wood"
  }, 
  {
    "author": {
      "lastName": "McCarthy", 
      "firstName": "Cormac"
    }, 
    "title": "No Country for Old Men"
  }, 
  {
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "Dress Her In Indigo"
  }, 
  {
    "author": {
      "lastName": "Murakami", 
      "firstName": "Haruki"
    }, 
    "title": "Kafka on the Shore"
  }, 
  {
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "One Fearful Yellow Eye"
  }, 
  {
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "The Lonely Silver Rain"
  }, 
  {
    "author": {
      "lastName": "Morton", 
      "firstName": "Kate"
    }, 
    "title": "The Forgotten Garden"
  }, 
  {
    "author": {
      "lastName": "Moore", 
      "firstName": "Christopher"
    }, 
    "title": "A Dirty Job"
  }, 
  {
    "author": {
      "lastName": "Maguire", 
      "firstName": "Gregory"
    }, 
    "title": "Wicked"
  }, 
  {
    "author": {
      "lastName": "McCammon", 
      "firstName": "Robert R."
    }, 
    "title": "Boy's Life"
  }, 
  {
    "author": {
      "lastName": "Marlantes", 
      "firstName": "Karl"
    }, 
    "title": "Matterhorn"
  }, 
  {
    "author": {
      "lastName": "Moore", 
      "firstName": "Michael"
    }, 
    "title": "Dude, Where's My Country"
  }, 
  {
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "The Long Lavender Look"
  }, 
  {
    "author": {
      "lastName": "McEwan", 
      "firstName": "Ian"
    }, 
    "title": "Atonement"
  }, 
  {
    "author": {
      "lastName": "Meyer", 
      "firstName": "Stephanie"
    }, 
    "title": "Breaking Dawn"
  }, 
  {
    "author": {
      "lastName": "Machiavelli", 
      "firstName": "Niccolo"
    }, 
    "title": "The Prince"
  }, 
  {
    "author": {
      "lastName": "Morgan", 
      "firstName": "Richard"
    }, 
    "title": "Woken Furies"
  }, 
  {
    "author": {
      "lastName": "McCullough", 
      "firstName": "David"
    }, 
    "title": "1776"
  }, 
  {
    "author": {
      "lastName": "Mankell", 
      "firstName": "Henning"
    }, 
    "title": "The Troubled Man"
  }, 
  {
    "author": {
      "lastName": "Nix", 
      "firstName": "Garth"
    }, 
    "title": "Sabriel"
  }, 
  {
    "author": {
      "lastName": "Mantel", 
      "firstName": "Hilary"
    }, 
    "title": "Wolf Hall"
  }, 
  {
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "A Tan And Sandy Silence"
  }, 
  {
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "Darker Than Amber"
  }, 
  {
    "author": {
      "lastName": "Meyer", 
      "firstName": "Stephanie"
    }, 
    "title": "New Moon"
  }, 
  {
    "author": {
      "lastName": "Mieville", 
      "firstName": "China"
    }, 
    "title": "Embassytown"
  }, 
  {
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "The Dreadful Lemon Sky"
  }, 
  {
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "Bright Orange for the Shroud"
  }, 
  {
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "Pale Gray For Guilt"
  }, 
  {
    "author": {
      "lastName": "Martel", 
      "firstName": "Yann"
    }, 
    "title": "Life of Pi"
  }, 
  {
    "author": {
      "lastName": "McCarthy", 
      "firstName": "Cormac"
    }, 
    "title": "All the Pretty Horses"
  }, 
  {
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "The Empty Copper Sea"
  }, 
  {
    "author": {
      "lastName": "Martin", 
      "firstName": "Steve"
    }, 
    "title": "Born Standing Up, A Comic's Life"
  }, 
  {
    "author": {
      "lastName": "Matheson", 
      "firstName": "Richard"
    }, 
    "title": "I Am Legend"
  }, 
  {
    "author": {
      "lastName": "Mitchell", 
      "firstName": "David"
    }, 
    "title": "The Thousand Autumns of Jacob de Zoet"
  }, 
  {
    "author": {
      "lastName": "Nix", 
      "firstName": "Garth"
    }, 
    "title": "Lirael"
  }, 
  {
    "author": {
      "lastName": "Munn", 
      "firstName": "Olivia"
    }, 
    "title": "Suck It, Wonder Woman!"
  }, 
  {
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "A Deadly Shade Of Gold"
  }, 
  {
    "author": {
      "lastName": "Miller", 
      "firstName": "Henry"
    }, 
    "title": "Tropic of Cancer"
  }, 
  {
    "author": {
      "lastName": "Niven", 
      "firstName": "Larry"
    }, 
    "title": "Ringworld"
  }, 
  {
    "author": {
      "lastName": "Maher", 
      "firstName": "Bill"
    }, 
    "title": "When You Ride Alone You Ride with Bin Laden"
  }, 
  {
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "The Turquoise Lament"
  }, 
  {
    "author": {
      "lastName": "MacDonald", 
      "firstName": "John D."
    }, 
    "title": "Cinnamon Skin"
  }, 
  {
    "author": {
      "lastName": "Nietzsche", 
      "firstName": "Friedrich"
    }, 
    "title": "Basic Writing of Nietzsche"
  }, 
  {
    "author": {
      "lastName": "Moore", 
      "firstName": "Christopher"
    }, 
    "title": "You Suck"
  }, 
  {
    "author": {
      "lastName": "Gibson", 
      "firstName": "William"
    }, 
    "title": "Mona Lisa Overdrive"
  }, 
  {
    "author": {
      "lastName": "Gaiman", 
      "firstName": "Neil"
    }, 
    "title": "Neverwhere"
  }, 
  {
    "author": {
      "lastName": "Goodkind", 
      "firstName": "Terry"
    }, 
    "title": "Debt of Bones"
  }, 
  {
    "author": {
      "lastName": "Goodkind", 
      "firstName": "Terry"
    }, 
    "title": "Soul of the Fire"
  }, 
  {
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "T is for Trespass"
  }, 
  {
    "author": {
      "lastName": "Griffin", 
      "firstName": "Kathy"
    }, 
    "title": "Official Book Club Selection, A Memoir According to Kathy Griffin"
  }, 
  {
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "U is for Undertow"
  }, 
  {
    "author": {
      "lastName": "George", 
      "firstName": "Margaret"
    }, 
    "title": "Memoirs of Cleopatra"
  }, 
  {
    "author": {
      "lastName": "Grossman", 
      "firstName": "Lev"
    }, 
    "title": "The Magicians"
  }, 
  {
    "author": {
      "lastName": "Goodwin", 
      "firstName": "Doris Kearns"
    }, 
    "title": "Team of Rivals"
  }, 
  {
    "author": {
      "lastName": "Grimm", 
      "firstName": "Wilhelm"
    }, 
    "title": "The Complete Grimm's Fairy Tales"
  }, 
  {
    "author": {
      "lastName": "Gregory", 
      "firstName": "Philippa"
    }, 
    "title": "The White Queen"
  }, 
  {
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Associate"
  }, 
  {
    "author": {
      "lastName": "Greene", 
      "firstName": "Brian"
    }, 
    "title": "The Elegant Universe"
  }, 
  {
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Rainmaker"
  }, 
  {
    "author": {
      "lastName": "Gabaldon", 
      "firstName": "Diana"
    }, 
    "title": "Drums of Autumn"
  }, 
  {
    "author": {
      "lastName": "Goodkind", 
      "firstName": "Terry"
    }, 
    "title": "Chainfire"
  }, 
  {
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Confession"
  }, 
  {
    "author": {
      "lastName": "Gibson", 
      "firstName": "William"
    }, 
    "title": "Pattern Recognition"
  }, 
  {
    "author": {
      "lastName": "Gaiman", 
      "firstName": "Neil"
    }, 
    "title": "American Gods"
  }, 
  {
    "author": {
      "lastName": "Gibson", 
      "firstName": "William"
    }, 
    "title": "Johnny Mnemonic"
  }, 
  {
    "author": {
      "lastName": "Greene", 
      "firstName": "Brian"
    }, 
    "title": "The Hidden Reality"
  }, 
  {
    "author": {
      "lastName": "Gabaldon", 
      "firstName": "Diana"
    }, 
    "title": "Dragonfly in Amber"
  }, 
  {
    "author": {
      "lastName": "Gabaldon", 
      "firstName": "Diana"
    }, 
    "title": "An Echo in the Bone"
  }, 
  {
    "author": {
      "lastName": "Gladwell", 
      "firstName": "Malcolm"
    }, 
    "title": "Blink, The Power of Thinking Without Thinking"
  }, 
  {
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Innocent Man"
  }, 
  {
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "P is for Peril"
  }, 
  {
    "author": {
      "lastName": "Goodkind", 
      "firstName": "Terry"
    }, 
    "title": "The Pillars of Creation"
  }, 
  {
    "author": {
      "lastName": "Grogan", 
      "firstName": "John"
    }, 
    "title": "Marley & Me"
  }, 
  {
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Partner"
  }, 
  {
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "Q is for Quarry"
  }, 
  {
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Chamber"
  }, 
  {
    "author": {
      "lastName": "Gibson", 
      "firstName": "William"
    }, 
    "title": "Spook Country"
  }, 
  {
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "K is for Killer"
  }, 
  {
    "author": {
      "lastName": "Gabaldon", 
      "firstName": "Diana"
    }, 
    "title": "A Breath of Snow and Ashes"
  }, 
  {
    "author": {
      "lastName": "Gaiman", 
      "firstName": "Neil"
    }, 
    "title": "Fragile Things"
  }, 
  {
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Testament"
  }, 
  {
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "A Time to Kill"
  }, 
  {
    "author": {
      "lastName": "Goodkind", 
      "firstName": "Terry"
    }, 
    "title": "Confessor"
  }, 
  {
    "author": {
      "lastName": "Golding", 
      "firstName": "William"
    }, 
    "title": "Lord of the Flies"
  }, 
  {
    "author": {
      "lastName": "Goodkind", 
      "firstName": "Terry"
    }, 
    "title": "Stone of Tears"
  }, 
  {
    "author": {
      "lastName": "Gregory", 
      "firstName": "Philippa"
    }, 
    "title": "The Red Queen"
  }, 
  {
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "A is for Alibi"
  }, 
  {
    "author": {
      "lastName": "Giffin", 
      "firstName": "Emily"
    }, 
    "title": "Baby Proof"
  }, 
  {
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "O is for Outlaw"
  }, 
  {
    "author": {
      "lastName": "Garland", 
      "firstName": "Alex"
    }, 
    "title": "The Beach"
  }, 
  {
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Last Juror"
  }, 
  {
    "author": {
      "lastName": "Gabaldon", 
      "firstName": "Diana"
    }, 
    "title": "Voyager"
  }, 
  {
    "author": {
      "lastName": "Goldman", 
      "firstName": "William"
    }, 
    "title": "The Princess Bride"
  }, 
  {
    "author": {
      "lastName": "Goodkind", 
      "firstName": "Terry"
    }, 
    "title": "Phantom"
  }, 
  {
    "author": {
      "lastName": "Gorant", 
      "firstName": "Jim"
    }, 
    "title": "The Lost Dogs"
  }, 
  {
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Firm"
  }, 
  {
    "author": {
      "lastName": "Gleick", 
      "firstName": "James"
    }, 
    "title": "The Information"
  }, 
  {
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "B is for Burglar"
  }, 
  {
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "D is for Deadbeat"
  }, 
  {
    "author": {
      "lastName": "Gruen", 
      "firstName": "Sara"
    }, 
    "title": "Water for Elephants"
  }, 
  {
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "N is for Noose"
  }, 
  {
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The King of Torts"
  }, 
  {
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "A Painted House"
  }, 
  {
    "author": {
      "lastName": "Gabaldon", 
      "firstName": "Diana"
    }, 
    "title": "Outlander"
  }, 
  {
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "G is for Gumshoe"
  }, 
  {
    "author": {
      "lastName": "Gabaldon", 
      "firstName": "Diana"
    }, 
    "title": "The Fiery Cross"
  }, 
  {
    "author": {
      "lastName": "Green", 
      "firstName": "Simon R."
    }, 
    "title": "Something from the Nightside"
  }, 
  {
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Runaway Jury"
  }, 
  {
    "author": {
      "lastName": "Gaiman", 
      "firstName": "Neil"
    }, 
    "title": "Coraline"
  }, 
  {
    "author": {
      "lastName": "Grippando", 
      "firstName": "James"
    }, 
    "title": "A King's Ransom"
  }, 
  {
    "author": {
      "lastName": "Grunwald", 
      "firstName": "Lisa"
    }, 
    "title": "The Irresistible Henry House"
  }, 
  {
    "author": {
      "lastName": "Gilbert", 
      "firstName": "Elizabeth"
    }, 
    "title": "Eat, Pray, Love"
  }, 
  {
    "author": {
      "lastName": "", 
      "firstName": "Grimm Brothers"
    }, 
    "title": "Grimm's Fairy Tales"
  }, 
  {
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Summons"
  }, 
  {
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "E is for Evidence"
  }, 
  {
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "Playing for Pizza"
  }, 
  {
    "author": {
      "lastName": "Gemmell", 
      "firstName": "David"
    }, 
    "title": "Dark Moon"
  }, 
  {
    "author": {
      "lastName": "Gaiman", 
      "firstName": "Neil"
    }, 
    "title": "Anansi Boys"
  }, 
  {
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Pelican Brief"
  }, 
  {
    "author": {
      "lastName": "Gladwell", 
      "firstName": "Malcolm"
    }, 
    "title": "Outliers, The Story of Success"
  }, 
  {
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "Ford County"
  }, 
  {
    "author": {
      "lastName": "Gleick", 
      "firstName": "James"
    }, 
    "title": "Genius, The Life and Science of Richard Feynman"
  }, 
  {
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "R is for Ricochet"
  }, 
  {
    "author": {
      "lastName": "Gaiman", 
      "firstName": "Neil"
    }, 
    "title": "The Graveyard Book"
  }, 
  {
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "M is for Malice"
  }, 
  {
    "author": {
      "lastName": "Goodkind", 
      "firstName": "Terry"
    }, 
    "title": "Faith of the Fallen"
  }, 
  {
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "Skipping Christmas"
  }, 
  {
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "H is for Homicide"
  }, 
  {
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Client"
  }, 
  {
    "author": {
      "lastName": "Giffin", 
      "firstName": "Emily"
    }, 
    "title": "Heart of the Matter"
  }, 
  {
    "author": {
      "lastName": "Gregory", 
      "firstName": "Philippa"
    }, 
    "title": "The Boleyn Inheritance"
  }, 
  {
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Broker"
  }, 
  {
    "author": {
      "lastName": "", 
      "firstName": "Grahame"
    }, 
    "title": "Abraham Lincoln, Vampire Hunter"
  }, 
  {
    "author": {
      "lastName": "Golden", 
      "firstName": "Arthur"
    }, 
    "title": "Memoirs of a Geisha"
  }, 
  {
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "I is for Innocent"
  }, 
  {
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "C is for Corpse"
  }, 
  {
    "author": {
      "lastName": "Goodkind", 
      "firstName": "Terry"
    }, 
    "title": "Naked Empire"
  }, 
  {
    "author": {
      "lastName": "Gregory", 
      "firstName": "Philippa"
    }, 
    "title": "The Other Boleyn Girl"
  }, 
  {
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Brethren"
  }, 
  {
    "author": {
      "lastName": "Goodkind", 
      "firstName": "Terry"
    }, 
    "title": "Blood of the Fold"
  }, 
  {
    "author": {
      "lastName": "Gaiman", 
      "firstName": "Neil"
    }, 
    "title": "Stardust"
  }, 
  {
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "L is for Lawless"
  }, 
  {
    "author": {
      "lastName": "Giffin", 
      "firstName": "Emily"
    }, 
    "title": "Love the One You're With"
  }, 
  {
    "author": {
      "lastName": "Gladwell", 
      "firstName": "Malcolm"
    }, 
    "title": "The Tipping Point, How Little Things Can Make a Big Difference"
  }, 
  {
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Street Lawyer"
  }, 
  {
    "author": {
      "lastName": "Greene", 
      "firstName": "Robert"
    }, 
    "title": "48 Laws of Power"
  }, 
  {
    "author": {
      "lastName": "Giffin", 
      "firstName": "Emily"
    }, 
    "title": "Something Borrowed"
  }, 
  {
    "author": {
      "lastName": "Goodkind", 
      "firstName": "Terry"
    }, 
    "title": "Wizard's First Rule"
  }, 
  {
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "J is for Judgement"
  }, 
  {
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "The Appeal"
  }, 
  {
    "author": {
      "lastName": "Gibson", 
      "firstName": "William"
    }, 
    "title": "Burning Chrome"
  }, 
  {
    "author": {
      "lastName": "Green", 
      "firstName": "John"
    }, 
    "title": "Will Grayson, Will Grayson"
  }, 
  {
    "author": {
      "lastName": "Gaiman", 
      "firstName": "Neil"
    }, 
    "title": "Good Omens"
  }, 
  {
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "S is for Silence"
  }, 
  {
    "author": {
      "lastName": "", 
      "firstName": "Grahame"
    }, 
    "title": "Pride and Prejudice and Zombies"
  }, 
  {
    "author": {
      "lastName": "Giffin", 
      "firstName": "Emily"
    }, 
    "title": "Something Blue"
  }, 
  {
    "author": {
      "lastName": "Greitens", 
      "firstName": "Eric"
    }, 
    "title": "The Heart and the Fist"
  }, 
  {
    "author": {
      "lastName": "Gibson", 
      "firstName": "William"
    }, 
    "title": "Count Zero"
  }, 
  {
    "author": {
      "lastName": "Gibson", 
      "firstName": "William"
    }, 
    "title": "The Difference Engine"
  }, 
  {
    "author": {
      "lastName": "Grafton", 
      "firstName": "Sue"
    }, 
    "title": "F is for Fugitive"
  }, 
  {
    "author": {
      "lastName": "Gibson", 
      "firstName": "William"
    }, 
    "title": "Neuromancer"
  }, 
  {
    "author": {
      "lastName": "Goodkind", 
      "firstName": "Terry"
    }, 
    "title": "Temple of the Winds"
  }, 
  {
    "author": {
      "lastName": "Grisham", 
      "firstName": "John"
    }, 
    "title": "Bleachers"
  }, 
  {
    "author": {
      "lastName": "Gibson", 
      "firstName": "William"
    }, 
    "title": "Zero History"
  }, 
  {
    "author": {
      "lastName": "George", 
      "firstName": "Margaret"
    }, 
    "title": "The Autobiography of Henry VIII"
  }, 
  {
    "author": {
      "lastName": "Donaldson", 
      "firstName": "Stephen R."
    }, 
    "title": "The Runes of the Earth"
  }, 
  {
    "author": {
      "lastName": "Dalton", 
      "firstName": "C.H."
    }, 
    "title": "A Practical Guide to Racism"
  }, 
  {
    "author": {
      "lastName": "Donaldson", 
      "firstName": "Stephen R."
    }, 
    "title": "The Wounded Land"
  }, 
  {
    "author": {
      "lastName": "Darwin", 
      "firstName": "Charles"
    }, 
    "title": "The Origin of Species"
  }, 
  {
    "author": {
      "lastName": "Dekker", 
      "firstName": "Ted"
    }, 
    "title": "Green"
  }, 
  {
    "author": {
      "lastName": "Dickens", 
      "firstName": "Charles"
    }, 
    "title": "David Copperfield"
  }, 
  {
    "author": {
      "lastName": "Dick", 
      "firstName": "Philip K."
    }, 
    "title": "Valis"
  }, 
  {
    "author": {
      "lastName": "Del Toro", 
      "firstName": "Guillermo"
    }, 
    "title": "The Strain"
  }, 
  {
    "author": {
      "lastName": "DeMille", 
      "firstName": "Nelson"
    }, 
    "title": "Night Fall"
  }, 
  {
    "author": {
      "lastName": "Dekker", 
      "firstName": "Ted"
    }, 
    "title": "The Bride Collector"
  }, 
  {
    "author": {
      "lastName": "Dickens", 
      "firstName": "Charles"
    }, 
    "title": "A Christmas Carol"
  }, 
  {
    "author": {
      "lastName": "DeMille", 
      "firstName": "Nelson"
    }, 
    "title": "Cathedral"
  }, 
  {
    "author": {
      "lastName": "Dick", 
      "firstName": "Philip K."
    }, 
    "title": "Do Androids Dream of Electric Sheep"
  }, 
  {
    "author": {
      "lastName": "Dumas", 
      "firstName": "Alexandre"
    }, 
    "title": "The Count of Monte Cristo"
  }, 
  {
    "author": {
      "lastName": "Dickens", 
      "firstName": "Charles"
    }, 
    "title": "Oliver Twist"
  }, 
  {
    "author": {
      "lastName": "Defoe", 
      "firstName": "Daniel"
    }, 
    "title": "Robinson Crusoe"
  }, 
  {
    "author": {
      "lastName": "Dickens", 
      "firstName": "Charles"
    }, 
    "title": "Our Mutual Friend"
  }, 
  {
    "author": {
      "lastName": "Dekker", 
      "firstName": "Ted"
    }, 
    "title": "Black"
  }, 
  {
    "author": {
      "lastName": "Dostoyevsky", 
      "firstName": "Fyodor"
    }, 
    "title": "The Idiot"
  }, 
  {
    "author": {
      "lastName": "Dekker", 
      "firstName": "Ted"
    }, 
    "title": "Red"
  }, 
  {
    "author": {
      "lastName": "DeMille", 
      "firstName": "Nelson"
    }, 
    "title": "Word of Honor"
  }, 
  {
    "author": {
      "lastName": "Dick", 
      "firstName": "Philip K."
    }, 
    "title": "Flow My Tears, The Policeman Said"
  }, 
  {
    "author": {
      "lastName": "Dukan", 
      "firstName": "Pierre"
    }, 
    "title": "The Dukan Diet"
  }, 
  {
    "author": {
      "lastName": "Dawkins", 
      "firstName": "Richard"
    }, 
    "title": "The Greatest Show on Earth, The Evidence for Evolution"
  }, 
  {
    "author": {
      "lastName": "Dawkins", 
      "firstName": "Richard"
    }, 
    "title": "The Selfish Gene"
  }, 
  {
    "author": {
      "lastName": "DeMille", 
      "firstName": "Nelson"
    }, 
    "title": "The Lion's Game"
  }, 
  {
    "author": {
      "lastName": "Diamant", 
      "firstName": "Anita"
    }, 
    "title": "The Red Tent"
  }, 
  {
    "author": {
      "lastName": "Dawkins", 
      "firstName": "Richard"
    }, 
    "title": "The Ancestor's Tale"
  }, 
  {
    "author": {
      "lastName": "Dick", 
      "firstName": "Philip K."
    }, 
    "title": "The Man in the High Castle"
  }, 
  {
    "author": {
      "lastName": "Dreiser", 
      "firstName": "Theodore"
    }, 
    "title": "Sister Carrie"
  }, 
  {
    "author": {
      "lastName": "Donaldson", 
      "firstName": "Stephen R."
    }, 
    "title": "The Power That Preserves"
  }, 
  {
    "author": {
      "lastName": "Donaldson", 
      "firstName": "Stephen R."
    }, 
    "title": "Against All Things Ending"
  }, 
  {
    "author": {
      "lastName": "Donaldson", 
      "firstName": "Stephen R."
    }, 
    "title": "The One Tree"
  }, 
  {
    "author": {
      "lastName": "DeLillo", 
      "firstName": "Don"
    }, 
    "title": "Underworld"
  }, 
  {
    "author": {
      "lastName": "Dick", 
      "firstName": "Philip K."
    }, 
    "title": "The Three Stigmata of Palmer Eldritch"
  }, 
  {
    "author": {
      "lastName": "DeMille", 
      "firstName": "Nelson"
    }, 
    "title": "Wild Fire"
  }, 
  {
    "author": {
      "lastName": "Dumas", 
      "firstName": "Alexandre"
    }, 
    "title": "The Three Musketeers"
  }, 
  {
    "author": {
      "lastName": "Dunn", 
      "firstName": "Katherine"
    }, 
    "title": "Geek Love"
  }, 
  {
    "author": {
      "lastName": "Dostoyevsky", 
      "firstName": "Fyodor"
    }, 
    "title": "The Brothers Karamazov"
  }, 
  {
    "author": {
      "lastName": "Diaz", 
      "firstName": "Junot"
    }, 
    "title": "The Brief Wondrous Life of Oscar Wao"
  }, 
  {
    "author": {
      "lastName": "Donaldson", 
      "firstName": "Stephen R."
    }, 
    "title": "The Fatal Revenant"
  }, 
  {
    "author": {
      "lastName": "Dick", 
      "firstName": "Philip K."
    }, 
    "title": "The Minority Report"
  }, 
  {
    "author": {
      "lastName": "DeMille", 
      "firstName": "Nelson"
    }, 
    "title": "Plum Island"
  }, 
  {
    "author": {
      "lastName": "Doyle", 
      "firstName": "Arthur Conan"
    }, 
    "title": "Sherlock Holmes Illustrated"
  }, 
  {
    "author": {
      "lastName": "Dickens", 
      "firstName": "Charles"
    }, 
    "title": "Hard Times"
  }, 
  {
    "author": {
      "lastName": "Dickens", 
      "firstName": "Charles"
    }, 
    "title": "A Tale of Two Cities"
  }, 
  {
    "author": {
      "lastName": "DeMille", 
      "firstName": "Nelson"
    }, 
    "title": "Up Country"
  }, 
  {
    "author": {
      "lastName": "Dawkins", 
      "firstName": "Richard"
    }, 
    "title": "The God Delusion"
  }, 
  {
    "author": {
      "lastName": "Dahl", 
      "firstName": "Roald"
    }, 
    "title": "Charlie and the Chocolate Factory"
  }, 
  {
    "author": {
      "lastName": "Dostoyevsky", 
      "firstName": "Fyodor"
    }, 
    "title": "Crime and Punishment"
  }, 
  {
    "author": {
      "lastName": "Diamond", 
      "firstName": "Jared"
    }, 
    "title": "Guns, Germs and Steel"
  }, 
  {
    "author": {
      "lastName": "Defoe", 
      "firstName": "Daniel"
    }, 
    "title": "Moll Flanders"
  }, 
  {
    "author": {
      "lastName": "DeMille", 
      "firstName": "Nelson"
    }, 
    "title": "The Lion"
  }, 
  {
    "author": {
      "lastName": "Dick", 
      "firstName": "Philip K."
    }, 
    "title": "A Scanner Darkly"
  }, 
  {
    "author": {
      "lastName": "Diamond", 
      "firstName": "Jared"
    }, 
    "title": "Collapse"
  }, 
  {
    "author": {
      "lastName": "Donaldson", 
      "firstName": "Stephen R."
    }, 
    "title": "Earth War"
  }, 
  {
    "author": {
      "lastName": "Dick", 
      "firstName": "Philip K."
    }, 
    "title": "Ubik"
  }, 
  {
    "author": {
      "lastName": "Dickens", 
      "firstName": "Charles"
    }, 
    "title": "Bleak House"
  }, 
  {
    "author": {
      "lastName": "Donaldson", 
      "firstName": "Stephen R."
    }, 
    "title": "White Gold Wielder"
  }, 
  {
    "author": {
      "lastName": "DeLillo", 
      "firstName": "Don"
    }, 
    "title": "White Noise"
  }, 
  {
    "author": {
      "lastName": "Donaldson", 
      "firstName": "Stephen R."
    }, 
    "title": "Lord Foul's Bane"
  }, 
  {
    "author": {
      "lastName": "Dekker", 
      "firstName": "Ted"
    }, 
    "title": "White"
  }, 
  {
    "author": {
      "lastName": "Dickens", 
      "firstName": "Charles"
    }, 
    "title": "Great Expectations"
  }, 
  {
    "author": {
      "lastName": "DeMille", 
      "firstName": "Nelson"
    }, 
    "title": "The General's Daughter"
  }, 
  {
    "author": {
      "lastName": "Donoghue", 
      "firstName": "Emma"
    }, 
    "title": "Room"
  }, 
  {
    "author": {
      "lastName": "DeMille", 
      "firstName": "Nelson"
    }, 
    "title": "The Gold Coast"
  }, 
  {
    "author": {
      "lastName": "Dumas", 
      "firstName": "Alexandre"
    }, 
    "title": "The Man in the Iron Mask"
  }, 
  {
    "author": {
      "lastName": "Del Toro", 
      "firstName": "Guillermo"
    }, 
    "title": "The Fall"
  }, 
  {
    "author": {
      "lastName": "Douglass", 
      "firstName": "Frederick"
    }, 
    "title": "Narrative of the Life of Frederick Douglass"
  }, 
  {
    "author": {
      "lastName": "Demick", 
      "firstName": "Barbara"
    }, 
    "title": "Nothing to Envy"
  }, 
  {
    "author": {
      "lastName": "Dekker", 
      "firstName": "Ted"
    }, 
    "title": "Thr3e"
  }, 
  {
    "author": {
      "lastName": "Fitzgerald", 
      "firstName": "F. Scott"
    }, 
    "title": "The Great Gatsby"
  }, 
  {
    "author": {
      "lastName": "Franzen", 
      "firstName": "Jonathan"
    }, 
    "title": "Freedom"
  }, 
  {
    "author": {
      "lastName": "Feist", 
      "firstName": "Raymond E."
    }, 
    "title": "Magician, Apprentice"
  }, 
  {
    "author": {
      "lastName": "Ferguson", 
      "firstName": "Niall"
    }, 
    "title": "The Ascent of Money"
  }, 
  {
    "author": {
      "lastName": "Frey", 
      "firstName": "James"
    }, 
    "title": "Bright Shiny Morning"
  }, 
  {
    "author": {
      "lastName": "Flanagan", 
      "firstName": "John"
    }, 
    "title": "The Kings of Clonmel"
  }, 
  {
    "author": {
      "lastName": "Flanagan", 
      "firstName": "John"
    }, 
    "title": "The Siege of Macindaw"
  }, 
  {
    "author": {
      "lastName": "Flanagan", 
      "firstName": "John"
    }, 
    "title": "The Icebound Land"
  }, 
  {
    "author": {
      "lastName": "Franzen", 
      "firstName": "Jonathan"
    }, 
    "title": "The Corrections"
  }, 
  {
    "author": {
      "lastName": "Fox", 
      "firstName": "Michael J."
    }, 
    "title": "Always Looking Up, The Adventures of an Incurable Optimist"
  }, 
  {
    "author": {
      "lastName": "Foer", 
      "firstName": "Jonathan Safran"
    }, 
    "title": "Extremely Loud & Incredibly Close"
  }, 
  {
    "author": {
      "lastName": "Flanagan", 
      "firstName": "John"
    }, 
    "title": "The Sorcerer of the North"
  }, 
  {
    "author": {
      "lastName": "Fforde", 
      "firstName": "Jasper"
    }, 
    "title": "One of Our Thursdays is Missing"
  }, 
  {
    "author": {
      "lastName": "Flanagan", 
      "firstName": "John"
    }, 
    "title": "The Ruins of Gorlan"
  }, 
  {
    "author": {
      "lastName": "Fforde", 
      "firstName": "Jasper"
    }, 
    "title": "First Among Sequels"
  }, 
  {
    "author": {
      "lastName": "Faber", 
      "firstName": "Michel"
    }, 
    "title": "The Crimson Petal and the White"
  }, 
  {
    "author": {
      "lastName": "Farmer", 
      "firstName": "Philip Jose"
    }, 
    "title": "To Your Scattered Bodies Go"
  }, 
  {
    "author": {
      "lastName": "Flanagan", 
      "firstName": "John"
    }, 
    "title": "The Battle for Skandia"
  }, 
  {
    "author": {
      "lastName": "Fitzgerald", 
      "firstName": "F. Scott"
    }, 
    "title": "Tender is the Night"
  }, 
  {
    "author": {
      "lastName": "Flaubert", 
      "firstName": "Gustave"
    }, 
    "title": "Sentimental Education"
  }, 
  {
    "author": {
      "lastName": "Foote", 
      "firstName": "Shelby"
    }, 
    "title": "Fort Sumter to Perryville"
  }, 
  {
    "author": {
      "lastName": "Frey", 
      "firstName": "James"
    }, 
    "title": "The Key"
  }, 
  {
    "author": {
      "lastName": "Follett", 
      "firstName": "Ken"
    }, 
    "title": "The Key to Rebecca"
  }, 
  {
    "author": {
      "lastName": "French", 
      "firstName": "Tana"
    }, 
    "title": "Faithful Place"
  }, 
  {
    "author": {
      "lastName": "Follett", 
      "firstName": "Ken"
    }, 
    "title": "Fall of Giants"
  }, 
  {
    "author": {
      "lastName": "Feynman", 
      "firstName": "Richard P."
    }, 
    "title": "Surely You're Joking, Mr. Feynman!"
  }, 
  {
    "author": {
      "lastName": "Feist", 
      "firstName": "Raymond E."
    }, 
    "title": "A Kingdom Besieged"
  }, 
  {
    "author": {
      "lastName": "Ferriss", 
      "firstName": "Timothy"
    }, 
    "title": "Hour Workweek"
  }, 
  {
    "author": {
      "lastName": "Frank", 
      "firstName": "Pat"
    }, 
    "title": "Alas, Babylon"
  }, 
  {
    "author": {
      "lastName": "Follett", 
      "firstName": "Ken"
    }, 
    "title": "World Without End"
  }, 
  {
    "author": {
      "lastName": "Frank", 
      "firstName": "Anne"
    }, 
    "title": "The Diary of a Young Girl"
  }, 
  {
    "author": {
      "lastName": "Ferguson", 
      "firstName": "Craig"
    }, 
    "title": "American on Purpose, The Improbable Adventures of an Unlikely Patriot"
  }, 
  {
    "author": {
      "lastName": "Flanagan", 
      "firstName": "John"
    }, 
    "title": "Halt's Peril"
  }, 
  {
    "author": {
      "lastName": "Foer", 
      "firstName": "Joshua"
    }, 
    "title": "Moonwalking With Einstein, The Art and Science of Remembering Everything"
  }, 
  {
    "author": {
      "lastName": "Friedlander", 
      "firstName": "Judah"
    }, 
    "title": "How to Beat Up Anybody"
  }, 
  {
    "author": {
      "lastName": "French", 
      "firstName": "Tana"
    }, 
    "title": "The Likeness"
  }, 
  {
    "author": {
      "lastName": "Fforde", 
      "firstName": "Jasper"
    }, 
    "title": "The Eyre Affair"
  }, 
  {
    "author": {
      "lastName": "Foote", 
      "firstName": "Shelby"
    }, 
    "title": "Red River to Appomattox"
  }, 
  {
    "author": {
      "lastName": "Flaubert", 
      "firstName": "Gustave"
    }, 
    "title": "Madame Bovary"
  }, 
  {
    "author": {
      "lastName": "Frost", 
      "firstName": "Robert"
    }, 
    "title": "The Road Not Taken"
  }, 
  {
    "author": {
      "lastName": "Fabiano", 
      "firstName": "Laurie"
    }, 
    "title": "Elizabeth Street"
  }, 
  {
    "author": {
      "lastName": "Fitzgerald", 
      "firstName": "F. Scott"
    }, 
    "title": "The Beautiful and Damned"
  }, 
  {
    "author": {
      "lastName": "Follett", 
      "firstName": "Ken"
    }, 
    "title": "Jackdaws"
  }, 
  {
    "author": {
      "lastName": "Ferriss", 
      "firstName": "Timothy"
    }, 
    "title": "Hour Body"
  }, 
  {
    "author": {
      "lastName": "Fforde", 
      "firstName": "Jasper"
    }, 
    "title": "Lost in a Good Book"
  }, 
  {
    "author": {
      "lastName": "Fforde", 
      "firstName": "Jasper"
    }, 
    "title": "Something Rotten"
  }, 
  {
    "author": {
      "lastName": "Frazier", 
      "firstName": "Charles"
    }, 
    "title": "Cold Mountain"
  }, 
  {
    "author": {
      "lastName": "Flanagan", 
      "firstName": "John"
    }, 
    "title": "Erak's Ransom"
  }, 
  {
    "author": {
      "lastName": "Follett", 
      "firstName": "Ken"
    }, 
    "title": "The Pillars of the Earth"
  }, 
  {
    "author": {
      "lastName": "Fowles", 
      "firstName": "John"
    }, 
    "title": "The French Lieutenant's Woman"
  }, 
  {
    "author": {
      "lastName": "Foer", 
      "firstName": "Jonathan Safran"
    }, 
    "title": "Extremely Loud and Incredibly Close"
  }, 
  {
    "author": {
      "lastName": "Foote", 
      "firstName": "Shelby"
    }, 
    "title": "Fredericksburg to Meridian"
  }, 
  {
    "author": {
      "lastName": "Flanagan", 
      "firstName": "John"
    }, 
    "title": "The Burning Bridge"
  }, 
  {
    "author": {
      "lastName": "Fforde", 
      "firstName": "Jasper"
    }, 
    "title": "The Well of Lost Plots"
  }, 
  {
    "author": {
      "lastName": "Fukuyama", 
      "firstName": "Francis"
    }, 
    "title": "Origins of Political Order"
  }, 
  {
    "author": {
      "lastName": "Ford", 
      "firstName": "Jamie"
    }, 
    "title": "Hotel on the Corner of Bitter and Sweet"
  }, 
  {
    "author": {
      "lastName": "Fielding", 
      "firstName": "Helen"
    }, 
    "title": "Bridget Jones's Diary"
  }, 
  {
    "author": {
      "lastName": "Flynn", 
      "firstName": "Gillian"
    }, 
    "title": "Dark Places"
  }, 
  {
    "author": {
      "lastName": "Follett", 
      "firstName": "Ken"
    }, 
    "title": "The Man from St. Petersburg"
  }, 
  {
    "author": {
      "lastName": "Frey", 
      "firstName": "James"
    }, 
    "title": "A Million Little Pieces"
  }, 
  {
    "author": {
      "lastName": "Flanagan", 
      "firstName": "John"
    }, 
    "title": "Ja"
  }, 
  {
    "author": {
      "lastName": "Fey", 
      "firstName": "Tina"
    }, 
    "title": "Bossypants"
  }, 
  {
    "author": {
      "lastName": "Fitzgerald", 
      "firstName": "F. Scott"
    }, 
    "title": "This Side of Paradise"
  }, 
  {
    "author": {
      "lastName": "French", 
      "firstName": "Tana"
    }, 
    "title": "In the Woods"
  }, 
  {
    "author": {
      "lastName": "Foer", 
      "firstName": "Jonathan Safran"
    }, 
    "title": "Eating Animals"
  }, 
  {
    "author": {
      "lastName": "Smith", 
      "firstName": "Patti"
    }, 
    "title": "Just Kids"
  }, 
  {
    "author": {
      "lastName": "Stephenson", 
      "firstName": "Neal"
    }, 
    "title": "The System of the World"
  }, 
  {
    "author": {
      "lastName": "Snyder", 
      "firstName": "Blake"
    }, 
    "title": "Save the Cat!"
  }, 
  {
    "author": {
      "lastName": "Stegner", 
      "firstName": "Wallace"
    }, 
    "title": "Angle of Repose"
  }, 
  {
    "author": {
      "lastName": "Stephenson", 
      "firstName": "Neal"
    }, 
    "title": "Quicksilver"
  }, 
  {
    "author": {
      "lastName": "Stroud", 
      "firstName": "Jonathan"
    }, 
    "title": "The Amulet of Samarkand"
  }, 
  {
    "author": {
      "lastName": "Sebold", 
      "firstName": "Alice"
    }, 
    "title": "The Lovely Bones"
  }, 
  {
    "author": {
      "lastName": "Stephenson", 
      "firstName": "Neal"
    }, 
    "title": "The Diamond Age"
  }, 
  {
    "author": {
      "lastName": "Smith", 
      "firstName": "Scott"
    }, 
    "title": "A Simple Plan"
  }, 
  {
    "author": {
      "lastName": "Shelley", 
      "firstName": "Mary"
    }, 
    "title": "Frankenstein"
  }, 
  {
    "author": {
      "lastName": "Scalzi", 
      "firstName": "John"
    }, 
    "title": "The Android's Dream"
  }, 
  {
    "author": {
      "lastName": "Saylor", 
      "firstName": "Steven"
    }, 
    "title": "Roma"
  }, 
  {
    "author": {
      "lastName": "Salinger", 
      "firstName": "J.D."
    }, 
    "title": "The Catcher in the Rye"
  }, 
  {
    "author": {
      "lastName": "Snyder", 
      "firstName": "Timothy"
    }, 
    "title": "Bloodlands, Europe Between Hitler and Stalin"
  }, 
  {
    "author": {
      "lastName": "Sparks", 
      "firstName": "Nicholas"
    }, 
    "title": "Dear John"
  }, 
  {
    "author": {
      "lastName": "Solzhenitsyn", 
      "firstName": "Alexander"
    }, 
    "title": "One Day in the Life of Ivan Denisovich"
  }, 
  {
    "author": {
      "lastName": "Stephenson", 
      "firstName": "Neal"
    }, 
    "title": "Cryptonomicon"
  }, 
  {
    "author": {
      "lastName": "Stein", 
      "firstName": "Garth"
    }, 
    "title": "The Art of Racing in the Rain###"
  }, 
  {
    "author": {
      "lastName": "Silverman", 
      "firstName": "Sarah"
    }, 
    "title": "The Bedwetter"
  }, 
  {
    "author": {
      "lastName": "Scalzi", 
      "firstName": "John"
    }, 
    "title": "The Last Colony"
  }, 
  {
    "author": {
      "lastName": "Styron", 
      "firstName": "William"
    }, 
    "title": "Sophie's Choice"
  }, 
  {
    "author": {
      "lastName": "Simmons", 
      "firstName": "Dan"
    }, 
    "title": "Olympos"
  }, 
  {
    "author": {
      "lastName": "Shaw", 
      "firstName": "Bernard"
    }, 
    "title": "Pygmalion"
  }, 
  {
    "author": {
      "lastName": "Shteyngart", 
      "firstName": "Gary"
    }, 
    "title": "Super Sad True Love Story"
  }, 
  {
    "author": {
      "lastName": "Simmons", 
      "firstName": "Dan"
    }, 
    "title": "The Fall of Hyperion"
  }, 
  {
    "author": {
      "lastName": "Steinbeck", 
      "firstName": "John"
    }, 
    "title": "Of Mice and Men"
  }, 
  {
    "author": {
      "lastName": "Schiff", 
      "firstName": "Stacy"
    }, 
    "title": "Cleopatra"
  }, 
  {
    "author": {
      "lastName": "Snicket", 
      "firstName": "Lemony"
    }, 
    "title": "The Reptile Room"
  }, 
  {
    "author": {
      "lastName": "Sixx", 
      "firstName": "Nikki"
    }, 
    "title": "The Heroin Diaries"
  }, 
  {
    "author": {
      "lastName": "Shakespeare", 
      "firstName": "William"
    }, 
    "title": "The Winter's Tale"
  }, 
  {
    "author": {
      "lastName": "Simmons", 
      "firstName": "Dan"
    }, 
    "title": "The Rise of Endymion"
  }, 
  {
    "author": {
      "lastName": "Stein", 
      "firstName": "Sol"
    }, 
    "title": "Stein on Writing"
  }, 
  {
    "author": {
      "lastName": "Scalzi", 
      "firstName": "John"
    }, 
    "title": "The Ghost Brigades"
  }, 
  {
    "author": {
      "lastName": "Straub", 
      "firstName": "Peter"
    }, 
    "title": "Ghost Story"
  }, 
  {
    "author": {
      "lastName": "Stephenson", 
      "firstName": "Neal"
    }, 
    "title": "The Confusion"
  }, 
  {
    "author": {
      "lastName": "Snicket", 
      "firstName": "Lemony"
    }, 
    "title": "The Vile Village"
  }, 
  {
    "author": {
      "lastName": "Snicket", 
      "firstName": "Lemony"
    }, 
    "title": "The Slippery Slope"
  }, 
  {
    "author": {
      "lastName": "Sedaris", 
      "firstName": "David"
    }, 
    "title": "Dress Your Family in Corduroy and Denim"
  }, 
  {
    "author": {
      "lastName": "Seton", 
      "firstName": "Anya"
    }, 
    "title": "Katherine"
  }, 
  {
    "author": {
      "lastName": "Snicket", 
      "firstName": "Lemony"
    }, 
    "title": "The Bad Beginning"
  }, 
  {
    "author": {
      "lastName": "Shakespeare", 
      "firstName": "William"
    }, 
    "title": "Henry IV (Part 1)"
  }, 
  {
    "author": {
      "lastName": "Sawyer", 
      "firstName": "Robert J."
    }, 
    "title": "Factoring Humanity"
  }, 
  {
    "author": {
      "lastName": "Sagan", 
      "firstName": "Carl"
    }, 
    "title": "Cosmos"
  }, 
  {
    "author": {
      "lastName": "Smith", 
      "firstName": "Betty"
    }, 
    "title": "A Tree Grows in Brooklyn"
  }, 
  {
    "author": {
      "lastName": "Sendak", 
      "firstName": "Maurice"
    }, 
    "title": "Where The Wild Things Are"
  }, 
  {
    "author": {
      "lastName": "Shakespeare", 
      "firstName": "William"
    }, 
    "title": "Hamlet"
  }, 
  {
    "author": {
      "lastName": "Shakespeare", 
      "firstName": "William"
    }, 
    "title": "The Merchant of Venice"
  }, 
  {
    "author": {
      "lastName": "Strout", 
      "firstName": "Elizabeth"
    }, 
    "title": "Olive Kitteridge"
  }, 
  {
    "author": {
      "lastName": "Simmons", 
      "firstName": "Dan"
    }, 
    "title": "Drood"
  }, 
  {
    "author": {
      "lastName": "Stockett", 
      "firstName": "Kathryn"
    }, 
    "title": "The Help"
  }, 
  {
    "author": {
      "lastName": "Stewart", 
      "firstName": "Mary"
    }, 
    "title": "The Hollow Hills"
  }, 
  {
    "author": {
      "lastName": "Sedaris", 
      "firstName": "David"
    }, 
    "title": "Squirrel Seeks Chipmunk"
  }, 
  {
    "author": {
      "lastName": "Shute", 
      "firstName": "Nevil"
    }, 
    "title": "On The Beach"
  }, 
  {
    "author": {
      "lastName": "Shute", 
      "firstName": "Nevil"
    }, 
    "title": "A Town Like Alice"
  }, 
  {
    "author": {
      "lastName": "Sanderson", 
      "firstName": "Brandon"
    }, 
    "title": "Elantris"
  }, 
  {
    "author": {
      "lastName": "Shakespeare", 
      "firstName": "William"
    }, 
    "title": "Romeo and Juliet"
  }, 
  {
    "author": {
      "lastName": "Stewart", 
      "firstName": "Mary"
    }, 
    "title": "The Last Enchantment"
  }, 
  {
    "author": {
      "lastName": "Setterfield", 
      "firstName": "Diane"
    }, 
    "title": "The Thirteenth Tale"
  }, 
  {
    "author": {
      "lastName": "Sparks", 
      "firstName": "Nicholas"
    }, 
    "title": "The Notebook"
  }, 
  {
    "author": {
      "lastName": "Sagan", 
      "firstName": "Carl"
    }, 
    "title": "Contact"
  }, 
  {
    "author": {
      "lastName": "Scalzi", 
      "firstName": "John"
    }, 
    "title": "Old Man's War"
  }, 
  {
    "author": {
      "lastName": "Sagan", 
      "firstName": "Carl"
    }, 
    "title": "The Demon Haunted World"
  }, 
  {
    "author": {
      "lastName": "Sagan", 
      "firstName": "Carl"
    }, 
    "title": "Pale Blue Dot"
  }, 
  {
    "author": {
      "lastName": "Snicket", 
      "firstName": "Lemony"
    }, 
    "title": "The Hostile Hospital"
  }, 
  {
    "author": {
      "lastName": "Simmons", 
      "firstName": "Dan"
    }, 
    "title": "Hyperion"
  }, 
  {
    "author": {
      "lastName": "Stevenson", 
      "firstName": "Robert Lous"
    }, 
    "title": "The Strange Case of Dr. Jekyll and Mr. Hyde"
  }, 
  {
    "author": {
      "lastName": "Saramago", 
      "firstName": "Jose"
    }, 
    "title": "Blindness"
  }, 
  {
    "author": {
      "lastName": "Shakespeare", 
      "firstName": "William"
    }, 
    "title": "The Tempest"
  }, 
  {
    "author": {
      "lastName": "Simmons", 
      "firstName": "Dan"
    }, 
    "title": "Summer of Night"
  }, 
  {
    "author": {
      "lastName": "Sparks", 
      "firstName": "Nicholas"
    }, 
    "title": "Message in a Bottle"
  }, 
  {
    "author": {
      "lastName": "Sinclair", 
      "firstName": "Upton"
    }, 
    "title": "The Jungle"
  }, 
  {
    "author": {
      "lastName": "Snicket", 
      "firstName": "Lemony"
    }, 
    "title": "The Penultimate Peril"
  }, 
  {
    "author": {
      "lastName": "Sparks", 
      "firstName": "Nicholas"
    }, 
    "title": "Nights in Rodanthe"
  }, 
  {
    "author": {
      "lastName": "Shermer", 
      "firstName": "Michael"
    }, 
    "title": "Why People Believe Weird Things"
  }, 
  {
    "author": {
      "lastName": "Stephenson", 
      "firstName": "Neal"
    }, 
    "title": "Snow Crash"
  }, 
  {
    "author": {
      "lastName": "Stewart", 
      "firstName": "Mary"
    }, 
    "title": "The Wicked Day"
  }, 
  {
    "author": {
      "lastName": "Scott", 
      "firstName": "Walter"
    }, 
    "title": "Ivanhoe"
  }, 
  {
    "author": {
      "lastName": "Snicket", 
      "firstName": "Lemony"
    }, 
    "title": "The Austere Academy"
  }, 
  {
    "author": {
      "lastName": "Stoker", 
      "firstName": "Bram"
    }, 
    "title": "Dracula"
  }, 
  {
    "author": {
      "lastName": "Strauss", 
      "firstName": "Neil"
    }, 
    "title": "The Game"
  }, 
  {
    "author": {
      "lastName": "Shakespeare", 
      "firstName": "William"
    }, 
    "title": "Othello"
  }, 
  {
    "author": {
      "lastName": "", 
      "firstName": "Sapphire"
    }, 
    "title": "Push"
  }, 
  {
    "author": {
      "lastName": "Steinbeck", 
      "firstName": "John"
    }, 
    "title": "Tortilla Flat"
  }, 
  {
    "author": {
      "lastName": "Sparks", 
      "firstName": "Nicholas"
    }, 
    "title": "Safe Haven"
  }, 
  {
    "author": {
      "lastName": "Snicket", 
      "firstName": "Lemony"
    }, 
    "title": "The Miserable Mill"
  }, 
  {
    "author": {
      "lastName": "Simmons", 
      "firstName": "Dan"
    }, 
    "title": "Ilium"
  }, 
  {
    "author": {
      "lastName": "Stevenson", 
      "firstName": "Robert Louis"
    }, 
    "title": "Treasure Island"
  }, 
  {
    "author": {
      "lastName": "Steinbeck", 
      "firstName": "John"
    }, 
    "title": "Cannery Row"
  }, 
  {
    "author": {
      "lastName": "Snicket", 
      "firstName": "Lemony"
    }, 
    "title": "The End"
  }, 
  {
    "author": {
      "lastName": "Sparks", 
      "firstName": "Nicholas"
    }, 
    "title": "A Bend in the Road"
  }, 
  {
    "author": {
      "lastName": "Sparks", 
      "firstName": "Nicholas"
    }, 
    "title": "A Walk to Remember"
  }, 
  {
    "author": {
      "lastName": "Sass", 
      "firstName": "Erik"
    }, 
    "title": "The Mental Floss History of the World"
  }, 
  {
    "author": {
      "lastName": "Sparks", 
      "firstName": "Nicholas"
    }, 
    "title": "At First Sight"
  }, 
  {
    "author": {
      "lastName": "Sedaris", 
      "firstName": "David"
    }, 
    "title": "Naked"
  }, 
  {
    "author": {
      "lastName": "Stroud", 
      "firstName": "Jonathan"
    }, 
    "title": "Ptolemy's Gate"
  }, 
  {
    "author": {
      "lastName": "Sigler", 
      "firstName": "Scott"
    }, 
    "title": "Infected"
  }, 
  {
    "author": {
      "lastName": "Stephenson", 
      "firstName": "Neal"
    }, 
    "title": "Anathem"
  }, 
  {
    "author": {
      "lastName": "Stowe", 
      "firstName": "Harriet Beecher"
    }, 
    "title": "Uncle Tom's Cabin"
  }, 
  {
    "author": {
      "lastName": "Snicket", 
      "firstName": "Lemony"
    }, 
    "title": "The Ersatz Elevator"
  }, 
  {
    "author": {
      "lastName": "Steinbeck", 
      "firstName": "John"
    }, 
    "title": "The Pearl"
  }, 
  {
    "author": {
      "lastName": "Steakley", 
      "firstName": "John"
    }, 
    "title": "Armor"
  }, 
  {
    "author": {
      "lastName": "Snicket", 
      "firstName": "Lemony"
    }, 
    "title": "The Grim Grotto"
  }, 
  {
    "author": {
      "lastName": "Singh", 
      "firstName": "Simon"
    }, 
    "title": "The Code Book"
  }, 
  {
    "author": {
      "lastName": "Stroud", 
      "firstName": "Jonathan"
    }, 
    "title": "The Ring of Solomon"
  }, 
  {
    "author": {
      "lastName": "Sawyer", 
      "firstName": "Robert J."
    }, 
    "title": "Flashforward"
  }, 
  {
    "author": {
      "lastName": "Stewart", 
      "firstName": "Mary"
    }, 
    "title": "The Crystal Cave"
  }, 
  {
    "author": {
      "lastName": "Sharlet", 
      "firstName": "Jeff"
    }, 
    "title": "The Family"
  }, 
  {
    "author": {
      "lastName": "Simmons", 
      "firstName": "Dan"
    }, 
    "title": "Endymion"
  }, 
  {
    "author": {
      "lastName": "Steinbeck", 
      "firstName": "John"
    }, 
    "title": "East of Eden"
  }, 
  {
    "author": {
      "lastName": "Simmons", 
      "firstName": "Dan"
    }, 
    "title": "Carrion Comfort"
  }, 
  {
    "author": {
      "lastName": "Shaffer", 
      "firstName": "Mary Ann"
    }, 
    "title": "The Guernsey Literary and Potato Peel Pie Society"
  }, 
  {
    "author": {
      "lastName": "Sanderson", 
      "firstName": "Brandon"
    }, 
    "title": "Mistborn"
  }, 
  {
    "author": {
      "lastName": "Sanderson", 
      "firstName": "Brandon"
    }, 
    "title": "The Way of Kings"
  }, 
  {
    "author": {
      "lastName": "Smith", 
      "firstName": "Scott"
    }, 
    "title": "The Ruins"
  }, 
  {
    "author": {
      "lastName": "Snicket", 
      "firstName": "Lemony"
    }, 
    "title": "The Carnivorous Carnival"
  }, 
  {
    "author": {
      "lastName": "Styron", 
      "firstName": "William"
    }, 
    "title": "The Confessions of Nat Turner"
  }, 
  {
    "author": {
      "lastName": "Sanderson", 
      "firstName": "Brandon"
    }, 
    "title": "The Hero of Ages"
  }, 
  {
    "author": {
      "lastName": "Shakespeare", 
      "firstName": "William"
    }, 
    "title": "The Oxford Complete Works of Shakespeare"
  }, 
  {
    "author": {
      "lastName": "Stroud", 
      "firstName": "Jonathan"
    }, 
    "title": "The Golem's Eye"
  }, 
  {
    "author": {
      "lastName": "Sanderson", 
      "firstName": "Brandon"
    }, 
    "title": "The Well of Ascension"
  }, 
  {
    "author": {
      "lastName": "Simmons", 
      "firstName": "Dan"
    }, 
    "title": "The Terror"
  }, 
  {
    "author": {
      "lastName": "Sanderson", 
      "firstName": "Brandon"
    }, 
    "title": "Warbreaker"
  }, 
  {
    "author": {
      "lastName": "Snicket", 
      "firstName": "Lemony"
    }, 
    "title": "The Wide Window"
  }, 
  {
    "author": {
      "lastName": "Sawyer", 
      "firstName": "Robert J."
    }, 
    "title": "Calculating God"
  }, 
  {
    "author": {
      "lastName": "Sedaris", 
      "firstName": "David"
    }, 
    "title": "Me Talk Pretty One Day"
  }, 
  {
    "author": {
      "lastName": "Simonson", 
      "firstName": "Helen"
    }, 
    "title": "Major Pettigrew's Last Stand"
  }, 
  {
    "author": {
      "lastName": "Swift", 
      "firstName": "Jonathan"
    }, 
    "title": "Gulliver's Travels"
  }, 
  {
    "author": {
      "lastName": "Steinbeck", 
      "firstName": "John"
    }, 
    "title": "The Grapes of Wrath"
  }, 
  {
    "author": {
      "lastName": "Selby", 
      "firstName": "Hubert"
    }, 
    "title": "Requiem for a Dream"
  }, 
  {
    "author": {
      "lastName": "Shakespeare", 
      "firstName": "William"
    }, 
    "title": "Henry IV (Part 2)"
  }, 
  {
    "author": {
      "lastName": "Wilkinson", 
      "firstName": "Toby"
    }, 
    "title": "The Rise and Fall of Ancient Egypt"
  }, 
  {
    "author": {
      "lastName": "Wouk", 
      "firstName": "Herman"
    }, 
    "title": "The Caine Mutiny"
  }, 
  {
    "author": {
      "lastName": "Wyndham", 
      "firstName": "John"
    }, 
    "title": "The Day of the Triffids"
  }, 
  {
    "author": {
      "lastName": "Wright", 
      "firstName": "Steven"
    }, 
    "title": "Steven Wright Humor"
  }, 
  {
    "author": {
      "lastName": "Wells", 
      "firstName": "H.G."
    }, 
    "title": "The Time Machine and the Invisible Man"
  }, 
  {
    "author": {
      "lastName": "Wong", 
      "firstName": "David"
    }, 
    "title": "John Dies at the End"
  }, 
  {
    "author": {
      "lastName": "White", 
      "firstName": "Betty"
    }, 
    "title": "If You Ask Me"
  }, 
  {
    "author": {
      "lastName": "Weiner", 
      "firstName": "Jennifer"
    }, 
    "title": "In Her Shoes"
  }, 
  {
    "author": {
      "lastName": "Westerfeld", 
      "firstName": "Scott"
    }, 
    "title": "Extras"
  }, 
  {
    "author": {
      "lastName": "Ward", 
      "firstName": "J.R."
    }, 
    "title": "Lover Avenged"
  }, 
  {
    "author": {
      "lastName": "Wolfe", 
      "firstName": "Tom"
    }, 
    "title": "The Right Stuff"
  }, 
  {
    "author": {
      "lastName": "Walls", 
      "firstName": "Jeannette"
    }, 
    "title": "Half Broke Horses"
  }, 
  {
    "author": {
      "lastName": "Wilder", 
      "firstName": "Laura Ingalls"
    }, 
    "title": "The Long Winter"
  }, 
  {
    "author": {
      "lastName": "Woodward", 
      "firstName": "Bob"
    }, 
    "title": "Obama's Wars"
  }, 
  {
    "author": {
      "lastName": "Wharton", 
      "firstName": "Edith"
    }, 
    "title": "The House of Mirth"
  }, 
  {
    "author": {
      "lastName": "Weeks", 
      "firstName": "Brent"
    }, 
    "title": "Beyond the Shadows"
  }, 
  {
    "author": {
      "lastName": "Warren", 
      "firstName": "Robert Penn"
    }, 
    "title": "All the King's Men"
  }, 
  {
    "author": {
      "lastName": "Wyndham", 
      "firstName": "John"
    }, 
    "title": "The Chrysalids"
  }, 
  {
    "author": {
      "lastName": "Ward", 
      "firstName": "J.R."
    }, 
    "title": "Lover Awakened"
  }, 
  {
    "author": {
      "lastName": "Wallace", 
      "firstName": "David Foster"
    }, 
    "title": "Consider the Lobster and Other Essays"
  }, 
  {
    "author": {
      "lastName": "Woodward", 
      "firstName": "Bob"
    }, 
    "title": "Plan of Attack"
  }, 
  {
    "author": {
      "lastName": "Whitman", 
      "firstName": "Walt"
    }, 
    "title": "Leaves of Grass"
  }, 
  {
    "author": {
      "lastName": "Wright", 
      "firstName": "Richard"
    }, 
    "title": "Native Son"
  }, 
  {
    "author": {
      "lastName": "Wilder", 
      "firstName": "Laura Ingalls"
    }, 
    "title": "The First Four Years"
  }, 
  {
    "author": {
      "lastName": "Wilder", 
      "firstName": "Laura Ingalls"
    }, 
    "title": "On the Banks of Plum Creek"
  }, 
  {
    "author": {
      "lastName": "Zusak", 
      "firstName": "Markus"
    }, 
    "title": "The Book Thief"
  }, 
  {
    "author": {
      "lastName": "Wolfe", 
      "firstName": "Tom"
    }, 
    "title": "Bonfire of the Vanities"
  }, 
  {
    "author": {
      "lastName": "Weeks", 
      "firstName": "Brent"
    }, 
    "title": "The Way of Shadows"
  }, 
  {
    "author": {
      "lastName": "Zuckoff", 
      "firstName": "Mitchell"
    }, 
    "title": "La"
  }, 
  {
    "author": {
      "lastName": "Wallace", 
      "firstName": "David Foster"
    }, 
    "title": "Brief Interviews With Hideous Men"
  }, 
  {
    "author": {
      "lastName": "Wilde", 
      "firstName": "Oscar"
    }, 
    "title": "The Picture of Dorian Gray"
  }, 
  {
    "author": {
      "lastName": "Ward", 
      "firstName": "J.R."
    }, 
    "title": "Dark Lover"
  }, 
  {
    "author": {
      "lastName": "Wells", 
      "firstName": "H.G."
    }, 
    "title": "The War of the Worlds"
  }, 
  {
    "author": {
      "lastName": "Wasdin", 
      "firstName": "Howard"
    }, 
    "title": "SEAL Team Six"
  }, 
  {
    "author": {
      "lastName": "Ward", 
      "firstName": "J.R."
    }, 
    "title": "Lover Unbound"
  }, 
  {
    "author": {
      "lastName": "Wilber", 
      "firstName": "Del Quentin"
    }, 
    "title": "Rawhide Down"
  }, 
  {
    "author": {
      "lastName": "Wilmore", 
      "firstName": "Larry"
    }, 
    "title": "I'd Rather We Got Casinos, And Other Black Thoughts"
  }, 
  {
    "author": {
      "lastName": "Wharton", 
      "firstName": "Edith"
    }, 
    "title": "The Age of Innocence"
  }, 
  {
    "author": {
      "lastName": "Westerfeld", 
      "firstName": "Scott"
    }, 
    "title": "Pretties"
  }, 
  {
    "author": {
      "lastName": "Ward", 
      "firstName": "J.R."
    }, 
    "title": "Lover Enshrined"
  }, 
  {
    "author": {
      "lastName": "Zelazny", 
      "firstName": "Roger"
    }, 
    "title": "Lord of Light"
  }, 
  {
    "author": {
      "lastName": "Weeks", 
      "firstName": "Brent"
    }, 
    "title": "Shadow's Edge"
  }, 
  {
    "author": {
      "lastName": "Wilder", 
      "firstName": "Laura Ingalls"
    }, 
    "title": "By the Shores of Silver Lake"
  }, 
  {
    "author": {
      "lastName": "Wilder", 
      "firstName": "Laura Ingalls"
    }, 
    "title": "Little House on the Prairie"
  }, 
  {
    "author": {
      "lastName": "Walker", 
      "firstName": "Alice"
    }, 
    "title": "The Color Purple"
  }, 
  {
    "author": {
      "lastName": "Walls", 
      "firstName": "Jeannette"
    }, 
    "title": "The Glass Castle"
  }, 
  {
    "author": {
      "lastName": "Zafon", 
      "firstName": "Carlos Ruiz"
    }, 
    "title": "The Angel's Game"
  }, 
  {
    "author": {
      "lastName": "White", 
      "firstName": "T.H."
    }, 
    "title": "The Once and Future King"
  }, 
  {
    "author": {
      "lastName": "Wiesel", 
      "firstName": "Elie"
    }, 
    "title": "Night"
  }, 
  {
    "author": {
      "lastName": "Wharton", 
      "firstName": "Edith"
    }, 
    "title": "Ethan Frome"
  }, 
  {
    "author": {
      "lastName": "Weir", 
      "firstName": "Alison"
    }, 
    "title": "The Life of Elizabeth I"
  }, 
  {
    "author": {
      "lastName": "Weisman", 
      "firstName": "Alan"
    }, 
    "title": "The World Without Us"
  }, 
  {
    "author": {
      "lastName": "Woodward", 
      "firstName": "Bob"
    }, 
    "title": "Bush At War"
  }, 
  {
    "author": {
      "lastName": "Wilder", 
      "firstName": "Laura Ingalls"
    }, 
    "title": "These Happy Golden Years"
  }, 
  {
    "author": {
      "lastName": "Welsh", 
      "firstName": "Irvine"
    }, 
    "title": "Trainspotting"
  }, 
  {
    "author": {
      "lastName": "Zafon", 
      "firstName": "Carlos Ruiz"
    }, 
    "title": "The Shadow of the Wind"
  }, 
  {
    "author": {
      "lastName": "Weir", 
      "firstName": "Alison"
    }, 
    "title": "The Lady in the Tower"
  }, 
  {
    "author": {
      "lastName": "Wheaton", 
      "firstName": "Wil"
    }, 
    "title": "Just a Geek"
  }, 
  {
    "author": {
      "lastName": "Wilder", 
      "firstName": "Laura Ingalls"
    }, 
    "title": "Little Town on the Prairie"
  }, 
  {
    "author": {
      "lastName": "Weir", 
      "firstName": "Alison"
    }, 
    "title": "The Six Wives of Henry VIII"
  }, 
  {
    "author": {
      "lastName": "Wilson", 
      "firstName": "Robert Charles"
    }, 
    "title": "Spin"
  }, 
  {
    "author": {
      "lastName": "Young", 
      "firstName": "William"
    }, 
    "title": "The Shack"
  }, 
  {
    "author": {
      "lastName": "Yates", 
      "firstName": "Richard"
    }, 
    "title": "Revolutionary Road"
  }, 
  {
    "author": {
      "lastName": "Ward", 
      "firstName": "J.R."
    }, 
    "title": "Lover Unleashed"
  }, 
  {
    "author": {
      "lastName": "Weiner", 
      "firstName": "Jennifer"
    }, 
    "title": "Good In Bed"
  }, 
  {
    "author": {
      "lastName": "Weiner", 
      "firstName": "Jennifer"
    }, 
    "title": "Little Earthquakes"
  }, 
  {
    "author": {
      "lastName": "Wilder", 
      "firstName": "Laura Ingalls"
    }, 
    "title": "Little House Big Woods"
  }, 
  {
    "author": {
      "lastName": "Wolfe", 
      "firstName": "Gene"
    }, 
    "title": "Shadow & Claw"
  }, 
  {
    "author": {
      "lastName": "Wilder", 
      "firstName": "Laura Ingalls"
    }, 
    "title": "Farmer Boy"
  }, 
  {
    "author": {
      "lastName": "Ward", 
      "firstName": "J.R."
    }, 
    "title": "Lover Revealed"
  }, 
  {
    "author": {
      "lastName": "Winchester", 
      "firstName": "Simon"
    }, 
    "title": "The Professor and the Madman"
  }, 
  {
    "author": {
      "lastName": "Westerfeld", 
      "firstName": "Scott"
    }, 
    "title": "Uglies"
  }, 
  {
    "author": {
      "lastName": "Wallace", 
      "firstName": "David Foster"
    }, 
    "title": "Infinite Jest"
  }, 
  {
    "author": {
      "lastName": "Ward", 
      "firstName": "J.R."
    }, 
    "title": "Lover Eternal"
  }, 
  {
    "author": {
      "lastName": "Westerfeld", 
      "firstName": "Scott"
    }, 
    "title": "Specials"
  }, 
  {
    "author": {
      "lastName": "Zinn", 
      "firstName": "Howard"
    }, 
    "title": "A People's History of the United States"
  }, 
  {
    "author": {
      "lastName": "Wolfe", 
      "firstName": "Gene"
    }, 
    "title": "Sword and Citadel"
  }, 
  {
    "author": {
      "lastName": "Woolf", 
      "firstName": "Virginia"
    }, 
    "title": "To the Lighthouse"
  }, 
  {
    "author": {
      "lastName": "Ward", 
      "firstName": "J.R."
    }, 
    "title": "Lover Mine"
  }, 
  {
    "author": {
      "lastName": "Woolf", 
      "firstName": "Virginia"
    }, 
    "title": "Mrs. Dalloway"
  }, 
  {
    "author": {
      "lastName": "Evans", 
      "firstName": "Richard J."
    }, 
    "title": "The Coming of the Third Reich"
  }, 
  {
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Twelve Sharp"
  }, 
  {
    "author": {
      "lastName": "Erikson", 
      "firstName": "Steven"
    }, 
    "title": "Gardens of the Moon"
  }, 
  {
    "author": {
      "lastName": "Eddings", 
      "firstName": "David"
    }, 
    "title": "King of The Murgos"
  }, 
  {
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "To the Nines"
  }, 
  {
    "author": {
      "lastName": "Ehrenreich", 
      "firstName": "Barbara"
    }, 
    "title": "Sided"
  }, 
  {
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Fearless Fourteen"
  }, 
  {
    "author": {
      "lastName": "Eggers", 
      "firstName": "Dave"
    }, 
    "title": "What is the What"
  }, 
  {
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Ten Big Ones"
  }, 
  {
    "author": {
      "lastName": "Erikson", 
      "firstName": "Steven"
    }, 
    "title": "Midnight Tides"
  }, 
  {
    "author": {
      "lastName": "Eddings", 
      "firstName": "David"
    }, 
    "title": "Castle of Wizardry"
  }, 
  {
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "One for the Money"
  }, 
  {
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Foul Play"
  }, 
  {
    "author": {
      "lastName": "Eddings", 
      "firstName": "David"
    }, 
    "title": "Sorceress of Darshiva"
  }, 
  {
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Two for the Dough"
  }, 
  {
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Plum Lucky"
  }, 
  {
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Lean Mean Thirteen"
  }, 
  {
    "author": {
      "lastName": "Erikson", 
      "firstName": "Steven"
    }, 
    "title": "Deadhouse Gates"
  }, 
  {
    "author": {
      "lastName": "Eco", 
      "firstName": "Umberto"
    }, 
    "title": "Foucault's Pendulum"
  }, 
  {
    "author": {
      "lastName": "Eddings", 
      "firstName": "David"
    }, 
    "title": "Guardians of the West"
  }, 
  {
    "author": {
      "lastName": "Eddings", 
      "firstName": "David"
    }, 
    "title": "Magician's Gambit"
  }, 
  {
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Four to Score"
  }, 
  {
    "author": {
      "lastName": "Egan", 
      "firstName": "Timothy"
    }, 
    "title": "The Worst Hard Time"
  }, 
  {
    "author": {
      "lastName": "Ellroy", 
      "firstName": "James"
    }, 
    "title": "The Big Nowhere"
  }, 
  {
    "author": {
      "lastName": "Edwards", 
      "firstName": "Kim"
    }, 
    "title": "The Memory Keeper's Daughter"
  }, 
  {
    "author": {
      "lastName": "Eddings", 
      "firstName": "David"
    }, 
    "title": "Demon Lord of Karanda"
  }, 
  {
    "author": {
      "lastName": "Ellis", 
      "firstName": "Bret Easton"
    }, 
    "title": "Less Than Zero"
  }, 
  {
    "author": {
      "lastName": "Ellroy", 
      "firstName": "James"
    }, 
    "title": "L.A. Confidential"
  }, 
  {
    "author": {
      "lastName": "Erikson", 
      "firstName": "Steven"
    }, 
    "title": "Memories of Ice"
  }, 
  {
    "author": {
      "lastName": "Eagleton", 
      "firstName": "Terry"
    }, 
    "title": "Why Marx Was Right"
  }, 
  {
    "author": {
      "lastName": "Ellis", 
      "firstName": "Bret Easton"
    }, 
    "title": "Imperial Bedrooms"
  }, 
  {
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Plum Spooky"
  }, 
  {
    "author": {
      "lastName": "Eggers", 
      "firstName": "Dave"
    }, 
    "title": "You Shall Know Our Velocity"
  }, 
  {
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Eleven on Top"
  }, 
  {
    "author": {
      "lastName": "Eugenides", 
      "firstName": "Jeffrey"
    }, 
    "title": "Middlesex"
  }, 
  {
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Visions of Sugar Plums"
  }, 
  {
    "author": {
      "lastName": "Ellis", 
      "firstName": "Bret Easton"
    }, 
    "title": "Glamorama"
  }, 
  {
    "author": {
      "lastName": "Ellis", 
      "firstName": "Bret Easton"
    }, 
    "title": "American Psycho"
  }, 
  {
    "author": {
      "lastName": "Eddings", 
      "firstName": "David"
    }, 
    "title": "Enchanter's End Game"
  }, 
  {
    "author": {
      "lastName": "Ellroy", 
      "firstName": "James"
    }, 
    "title": "White Jazz"
  }, 
  {
    "author": {
      "lastName": "Evans", 
      "firstName": "Richard J."
    }, 
    "title": "The Third Reich at War"
  }, 
  {
    "author": {
      "lastName": "Emerson", 
      "firstName": "Ralph Waldo"
    }, 
    "title": "Essays and Poems"
  }, 
  {
    "author": {
      "lastName": "Eliot", 
      "firstName": "T.S."
    }, 
    "title": "Waste Land and Other Poems"
  }, 
  {
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "High Five"
  }, 
  {
    "author": {
      "lastName": "Ellroy", 
      "firstName": "James"
    }, 
    "title": "American Tabloid"
  }, 
  {
    "author": {
      "lastName": "Erikson", 
      "firstName": "Steven"
    }, 
    "title": "Dust of Dreams"
  }, 
  {
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Seven Up"
  }, 
  {
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Hard Eight"
  }, 
  {
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Sizzling Sixteen"
  }, 
  {
    "author": {
      "lastName": "Erikson", 
      "firstName": "Steven"
    }, 
    "title": "Toll the Hounds"
  }, 
  {
    "author": {
      "lastName": "Eco", 
      "firstName": "Umberto"
    }, 
    "title": "The Name of the Rose"
  }, 
  {
    "author": {
      "lastName": "Erikson", 
      "firstName": "Steven"
    }, 
    "title": "The Crippled God"
  }, 
  {
    "author": {
      "lastName": "Egan", 
      "firstName": "Jennifer"
    }, 
    "title": "A Visit from the Goon Squad"
  }, 
  {
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Plum Lovin'"
  }, 
  {
    "author": {
      "lastName": "Erikson", 
      "firstName": "Steven"
    }, 
    "title": "The Bonehunters"
  }, 
  {
    "author": {
      "lastName": "Eggers", 
      "firstName": "Dave"
    }, 
    "title": "Zeitoun"
  }, 
  {
    "author": {
      "lastName": "Evans", 
      "firstName": "Richard J."
    }, 
    "title": "The Third Reich in Power"
  }, 
  {
    "author": {
      "lastName": "Eddings", 
      "firstName": "David"
    }, 
    "title": "Queen of Sorcery"
  }, 
  {
    "author": {
      "lastName": "Eddings", 
      "firstName": "David"
    }, 
    "title": "The Seeress of Kell"
  }, 
  {
    "author": {
      "lastName": "Erikson", 
      "firstName": "Steven"
    }, 
    "title": "Reaper's Gale"
  }, 
  {
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Three to Get Deadly"
  }, 
  {
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Finger Lickin' Fifteen"
  }, 
  {
    "author": {
      "lastName": "Eddings", 
      "firstName": "David"
    }, 
    "title": "Pawn of Prophecy"
  }, 
  {
    "author": {
      "lastName": "Ellroy", 
      "firstName": "James"
    }, 
    "title": "The Black Dahlia"
  }, 
  {
    "author": {
      "lastName": "Erikson", 
      "firstName": "Steven"
    }, 
    "title": "House of Chains"
  }, 
  {
    "author": {
      "lastName": "Evanovich", 
      "firstName": "Janet"
    }, 
    "title": "Hot Six"
  }
];
