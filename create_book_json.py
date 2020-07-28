import os, json

book_filename_extensions = [".mobi", ".prc", ".pdf"]

books = [] 
books_path = "/home/jeremy/books/"
for subdir in os.listdir(books_path):
  for book_filename in os.listdir(os.path.join(books_path, subdir)):
    descriptors = book_filename.split(" - ")

    title = descriptors[len(descriptors) - 1].strip()
    for ext in book_filename_extensions:
      title = title.replace(ext, "")

    series = descriptors[1].strip() if len(descriptors) == 3 else ''

    author = [ word.strip() for word in descriptors[0].strip().split(",") ]
    if len(author) < 2:
      firstName = author[0]
      lastName = ""
    else:
      firstName = author[1]
      lastName = author[0]

    book = {
      'title': title,
      'series': series,
      'author': {
        'lastName': lastName,
        'firstName': firstName
      }
    }

    books.append(book)

print("const initialBookData = " + json.dumps(books, sort_keys=False, indent=2) + ";")
