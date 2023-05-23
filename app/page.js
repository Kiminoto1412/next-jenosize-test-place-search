
export default function Home() {

  const data = [
    {
    photo:"https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
    name:"name1",
    formatted_address:"formatted_address1",
    rating:5
  },
    {
    photo:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    name:"name2",
    formatted_address:"formatted_address2",
    rating:3.5
  },
    {
    photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrxVQS6FTAKCWpR7xX2ScDvKRmKhp6_Zo7GfutmwaG7w&s",
    name:"name3",
    formatted_address:"formatted_address3",
    rating:4.2
  },
]
  return (
    <>
      {/* <Navbar /> */}
      <div className="font-bold text-xl ">
        <div className="mb-5">

        Home page
        </div>
    <div className="mx-4 ">
        {data.length > 0 ? (
          data?.map((el, idx) => {
            return (
              <div key={idx} className="grid grid-cols-4 gap-3 mb-3">
                <div className="col-span-1">
                  <img
                    src={el.photo}
                    alt="photo"
                  />
                </div>
                <div className="col-span-3">
                  <div>
                    <strong>Name:</strong> {el.name}
                  </div>
                  <div>
                    <strong>Address:</strong> {el.formatted_address}
                  </div>
                  <div>
                    <strong>Rating:</strong> {el.rating}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-6xl">No restaurant data available</div>
        )}
      </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}
