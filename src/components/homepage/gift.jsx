import React from "react";

const Gift = () => {
  const gifts = [
    {
      thumbnail:
        "https://images.unsplash.com/photo-1650779398963-21aa0bb41bd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1957&q=80",
      title: "Silver-Toned Brass Enamelled Necklace",
      price: "$20",
      old_price: "$25",
      second_hand_condition: "Good",
      rating: 4.5,
      reviews: 120,
      store_rating: 4.8,
      store_reviews: 500,
      number_of_comparisons: 10,
      snippet: "A great gift for any occasion.",
      link: "https://example.com/gift1",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1676329947145-99145926d3eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1958&q=80",
      title: "Silver-Toned Brass Enamelled Necklace",
      price: "$20",
      old_price: "$25",
      second_hand_condition: "Good",
      rating: 4.5,
      reviews: 120,
      store_rating: 4.8,
      store_reviews: 500,
      number_of_comparisons: 10,
      snippet: "A great gift for any occasion.",
      link: "https://example.com/gift1",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1602752250055-5ebb552fc3ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Silver-Toned Brass Enamelled Necklace",
      price: "$20",
      old_price: "$25",
      second_hand_condition: "Good",
      rating: 4.5,
      reviews: 120,
      store_rating: 4.8,
      store_reviews: 500,
      number_of_comparisons: 10,
      snippet: "A great gift for any occasion.",
      link: "https://example.com/gift1",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1659095141570-be8b9aff59ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Silver-Toned Brass Enamelled Necklace",
      price: "$20",
      old_price: "$25",
      second_hand_condition: "Good",
      rating: 4.5,
      reviews: 120,
      store_rating: 4.8,
      store_reviews: 500,
      number_of_comparisons: 10,
      snippet: "A great gift for any occasion.",
      link: "https://example.com/gift1",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1676291055501-286c48bb186f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1890&q=80",
      title: "Silver-Toned Brass Enamelled Necklace",
      price: "$20",
      old_price: "$25",
      second_hand_condition: "Good",
      rating: 4.5,
      reviews: 120,
      store_rating: 4.8,
      store_reviews: 500,
      number_of_comparisons: 10,
      snippet: "A great gift for any occasion.",
      link: "https://example.com/gift1",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1603561589155-91da49cfa8d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
      title: "Silver-Toned Brass Enamelled Necklace",
      price: "$20",
      old_price: "$25",
      second_hand_condition: "Good",
      rating: 4.5,
      reviews: 120,
      store_rating: 4.8,
      store_reviews: 500,
      number_of_comparisons: 10,
      snippet: "A great gift for any occasion.",
      link: "https://example.com/gift1",
    },
    // Add more gift objects as needed
  ];

  return (
    <div className="bg-body-tertiary bg-slate-50">
    <div className="containers">
    <main>
      <div className="pt-5 text-center">
        <h2 className="text-3xl font-bold text-[#00CCFE] mb-2">Gift Guide - Results</h2>
        <p className="text-gray-600">   Here are the AI curated gift ideas based on your inputs:</p>
      </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10">
            {gifts.map((gift, index) => (
              <div
                key={index}
                className="flex flex-col items-stretch rounded-2xl shadow-xl overflow-hidden p-4 bg-gray-100 text-gray-600 max-w-sm "
              >
                <div className="product flex flex-col">
                  <img
                    className="product-img object-cover max-h-56 w-full rounded-lg m-auto "
                    src={gift.thumbnail}
                    alt={gift.title}
                  />
                  <div className="product-info flex flex-col">
                  <div>
                  <h4 className="mb-2 m-auto py-4 text-xl tracking-tight text-slate-900">
                  {gift.title}
                  </h4>
                  </div>
                  <div className="leftinfo flex justify-between">
                  <p>
                    <span className="text-3xl font-bold text-slate-900">
                      $449
                    </span>
                    <span className="text-sm text-slate-900 line-through">
                      $699
                    </span>
                  </p>

                  <div className="flex items-center my-2">
                    <i className="fa fa-star text-yellow-400"></i>
                    <i className="fa fa-star text-yellow-400"></i>
                    <i className="fa fa-star text-yellow-400"></i>
                    <i className="fa fa-star text-yellow-400"></i>

                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                      4.0
                    </span>
                  </div>
          
                  </div>
                    <div className="info flex text-xs justify-between ">
          
                      <div className="rightinfo  rounded-md  p-4 space-y-2">
                        <div className="flex items-center space-x-2">
                          <i className="fa fa-comment text-blue-500"></i>
                          <p className="text-sm font-semibold">
                            Reviews: {gift.reviews}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="fa fa-building text-green-500"></i>
                          <p className="text-sm font-semibold">
                            Store Rating: {gift.store_rating} / 5
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="fa fa-users text-purple-500"></i>
                          <p className="text-sm font-semibold">
                            Store Reviews: {gift.store_reviews}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i className="fa fa-exchange text-orange-500"></i>
                          <p className="text-sm font-semibold">
                            Number of Comparisons: {gift.number_of_comparisons}
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 mb-3 text-gray-600">
                      <i className="fa fa-info-circle text-gray-400"></i>{" "}
                      Description: {gift.snippet}
                    </p>

                    <a
                      href={gift.link}
                      className="btn btn-primary self-end bg-blue-500 hover:bg-blue-600 inline-flex items-center space-x-2 px-4 py-2 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                    >
                      <i className="fa fa-shopping-cart text-white"></i>
                      <span className="text-white">Buy Now</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Gift;
