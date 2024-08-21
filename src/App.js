import React, { useState } from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBRow, MDBCol, MDBFooter } from 'mdb-react-ui-kit';

function App() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Harry Potter and the Sorcerer\'s Stone',
      description: 'A young wizard embarks on his first year at Hogwarts School of Witchcraft and Wizardry.',
      pages: 309,
      isbn: '978-0439708180',
      googleBooksLink: 'https://books.google.com/books?id=wrOQLV6xB-wC',
      cover: 'https://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71CqStR7J6zeEWMOd1P3mcsgAj31mzpRf9Hri4saqWHJX4zC-LrSY55ePY1quyJbt9J7LzQGADZ9MvePdTdL0kNTgk72EvgK8jovRD7nA_qTkBw96Ws6ofD-hrdnNAATTGWRT-w'
    },
    {
      id: 2,
      title: 'The Lord of the Rings',
      description: 'An epic fantasy novel about the quest to destroy the One Ring.',
      pages: 1178,
      isbn: '978-0618640157',
      googleBooksLink: 'https://www.google.com/books/edition/The_Lord_Of_The_Rings/yl4dILkcqm4C?hl=en&gbpv=1&dq=the+lord+of+the+rings&printsec=frontcover',
      cover: 'https://via.placeholder.com/150/0000FF/FFFFFF/?text=LOTR'
    },
    {
      id: 3,
      title: 'To Kill a Mockingbird',
      description: 'A novel about the serious issues of rape and racial inequality in the Deep South.',
      pages: 281,
      isbn: '978-0060935467',
      googleBooksLink: 'https://books.google.com/books?id=PGR2AwAAQBAJ',
      cover: 'https://books.google.com/books/publisher/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70QrIVZiJ4Od841p0xgkFonc4oAVlwMfUHXkpxQpavVH5DwjdTFbAd5ML0OeCkWpbaUHk2dBgMY-Xc8pvysrL8b0e1v8wvz41yvam1Rk2D5B7wytrb55GyZPHMmqBEcCFdPCHK_'
    },
    {
      id: 4,
      title: '1984',
      description: 'A dystopian novel set in a totalitarian society under constant surveillance.',
      pages: 328,
      isbn: '978-0451524935',
      googleBooksLink: 'https://books.google.com/books?id=yxv1LK5gyV4C',
      cover: 'https://books.google.com/books/content?id=yxv1LK5gyV4C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE727u3jx1YzFcmZz3Y5hYRp_bLcw6r_nX9RK4WuyWfEV4W8Jf4YPQA0nLFWp--Klvelr099ZOSBSxPbA2fx6yGJOMsaRA6q1FO9E0n1DfSjxSYMwl2NVHLv3eHz_yU8CDu2PJC36'
    },
    {
      id: 5,
      title: 'Pride and Prejudice',
      description: 'A romantic novel about manners and matrimonial machinations.',
      pages: 279,
      isbn: '978-1503290563',
      googleBooksLink: 'https://books.google.com/books?id=4lbBCgAAQBAJ',
      cover: 'https://via.placeholder.com/150/FFC0CB/FFFFFF/?text=Pride'
    },
    {
      id: 6,
      title: 'The Great Gatsby',
      description: 'A novel about the American Dream and the roaring twenties.',
      pages: 180,
      isbn: '978-0743273565',
      googleBooksLink: 'https://books.google.com/books?id=eSu6CwAAQBAJ',
      cover: 'https://via.placeholder.com/150/FFD700/FFFFFF/?text=Gatsby'
    },
    {
      id: 7,
      title: 'Moby-Dick',
      description: 'A whaling voyage turns into an obsessive quest for revenge.',
      pages: 635,
      isbn: '978-1503280786',
      googleBooksLink: 'https://books.google.com/books?id=PvgbiDZnD1YC',
      cover: 'https://via.placeholder.com/150/00008B/FFFFFF/?text=Moby-Dick'
    },
    {
      id: 8,
      title: 'The Catcher in the Rye',
      description: 'A novel about teenage rebellion and angst.',
      pages: 214,
      isbn: '978-0316769488',
      googleBooksLink: 'https://books.google.com/books?id=4UqAEAAAQBAJ',
      cover: 'https://via.placeholder.com/150/800080/FFFFFF/?text=Catcher'
    },
    {
      id: 9,
      title: 'War and Peace',
      description: 'A historical novel that intertwines the lives of several families during the Napoleonic Wars.',
      pages: 1225,
      isbn: '978-1400079988',
      googleBooksLink: 'https://books.google.com/books?id=otxGxsmTFC4C',
      cover: 'https://via.placeholder.com/150/B22222/FFFFFF/?text=War+Peace'
    },
    {
      id: 10,
      title: 'The Hobbit',
      description: 'A fantasy adventure about a hobbit\'s journey to reclaim a lost kingdom.',
      pages: 310,
      isbn: '978-0547928227',
      googleBooksLink: 'https://books.google.com/books?id=5PfMDwAAQBAJ',
      cover: 'https://via.placeholder.com/150/FFD700/FFFFFF/?text=Hobbit'
    },
    {
      id: 11,
      title: 'Brave New World',
      description: 'A dystopian novel set in a future society controlled by technology and conditioning.',
      pages: 268,
      isbn: '978-0060850524',
      googleBooksLink: 'https://books.google.com/books?id=Y0SkQE02n34C',
      cover: 'https://via.placeholder.com/150/2F4F4F/FFFFFF/?text=Brave+New+World'
    },
    {
      id: 12,
      title: 'Anna Karenina',
      description: 'A tragic tale of love and betrayal in 19th century Russia.',
      pages: 964,
      isbn: '978-0143035008',
      googleBooksLink: 'https://books.google.com/books?id=IWH_BQAAQBAJ',
      cover: 'https://via.placeholder.com/150/FF4500/FFFFFF/?text=Anna+Karenina'
    },
    {
      id: 13,
      title: 'Jane Eyre',
      description: 'A novel about the struggles of an orphaned girl who becomes a governess.',
      pages: 532,
      isbn: '978-0141441146',
      googleBooksLink: 'https://books.google.com/books?id=sGxUvWDz79wC',
      cover: 'https://via.placeholder.com/150/DAA520/FFFFFF/?text=Jane+Eyre'
    },
    {
      id: 14,
      title: 'The Alchemist',
      description: 'A novel about a shepherd\'s journey to discover his personal legend.',
      pages: 208,
      isbn: '978-0062315007',
      googleBooksLink: 'https://books.google.com/books?id=w4xbCwAAQBAJ',
      cover: 'https://via.placeholder.com/150/00FF7F/FFFFFF/?text=Alchemist'
    },
    {
      id: 15,
      title: 'Don Quixote',
      description: 'A novel about an aging man who becomes a knight to revive chivalry.',
      pages: 992,
      isbn: '978-0060934346',
      googleBooksLink: 'https://books.google.com/books?id=xl5ROCKOIzIC',
      cover: 'https://via.placeholder.com/150/8B0000/FFFFFF/?text=Don+Quixote'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [bookmarks, setBookmarks] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleBookmark = (book) => {
    setBookmarks([...bookmarks, book]);
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Navbar */}
      <MDBNavbar light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">Book Library</MDBNavbarBrand>
          <MDBInput
            label="Search for a book"
            id="searchInput"
            type="text"
            value={searchTerm}
            onChange={handleSearch}
          />
        </MDBContainer>
      </MDBNavbar>

      {/* Main Section */}
      <MDBContainer className="mt-5">
        {filteredBooks.map((book) => (
          <MDBCard className="mb-4" key={book.id}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol md="4">
                  <img src={book.cover} alt={book.title} className="img-fluid" />
                </MDBCol>
                <MDBCol md="8">
                  <h5>{book.title}</h5>
                  <p>{book.description}</p>
                  <p><strong>Pages:</strong> {book.pages}</p>
                  <p><strong>ISBN:</strong> {book.isbn}</p>
                  <p><a href={book.googleBooksLink} target="_blank" rel="noopener noreferrer">View on Google Books</a></p>
                  <MDBBtn onClick={() => handleBookmark(book)}>Bookmark</MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        ))}
      </MDBContainer>

      {/* Footer */}
      <MDBFooter bgColor="light" className="text-center text-lg-left mt-5">
        <MDBContainer className="p-4">
          <h6 className="text-uppercase">Bookmarks</h6>
          {bookmarks.length === 0 ? (
            <p>No bookmarks yet.</p>
          ) : (
            <ul>
              {bookmarks.map((book, index) => (
                <li key={index}>{book.title}</li>
              ))}
            </ul>
          )}
        </MDBContainer>
        <div className="text-center p-3" style={{ backgroundColor: '#f1f1f1' }}>
          &copy; 2024 Book Library
        </div>
      </MDBFooter>
    </>
  );
}

export default App;
