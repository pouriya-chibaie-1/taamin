import React, { useEffect, useState,useContext } from "react";

import Card from "../card/Card";
import Filter from "../filter/Filter";
import Spinner from "../spinner/Spinner";

import { FaSlidersH } from "react-icons/fa";

import { getData, getProductPageInation } from "../../api";
import { Context } from "../../context";
import { FadeLoader } from "react-spinners";
import InfiniteScroll from "react-infinite-scroll-component";
import PagInation, { PaginationNav1Presentation } from "../pagination";
import PageInation from "../pagination";

export default function Grid() {
  const [filter, setFilter] = useState(false);
  const [changeOption, setChangeOption] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const context = useContext(Context);
  const {products,setProducts,loadingGridComponent,setLoadingGridComponent,partGroup,numberOfPages,setNumberOfPages} = context
 
  const toggleFilter = () => setFilter((prev) => !prev);

  useEffect(() => {
    setLoadingGridComponent(true)
    getData ()
    .then((res)=>{
      setLoadingGridComponent(false)
      if(numberOfPages.length !=0){

        setNumberOfPages(res.length/products.length)
      }
    }).catch((err)=>{
console.log(err)
    })
    getProductPageInation(page,partGroup)
      .then((res) => {
        const sort1 = res.map((item) => {
          return { ...item, SellPrice: parseInt(item.SellPrice.replaceAll(",", "")) };
        });
        setProducts([...products,...sort1])
      
      })
      .then(setLoading(false))
      .catch((error) => console.log(error));
  }, [page]);

  function sortPerPrice(acending) {
    return products.sort(function (a, b) {
            return acending ? a.SellPrice - b.SellPrice : b.SellPrice - a.SellPrice;
    })}
  const sortHandler = async(e) => {
     await setProducts(sortPerPrice(e.target.value))
  };
  console.log("products" ,products)


  if (loadingGridComponent) {
    return <Spinner />;

  }
console.log("numberOfPages",numberOfPages)
  return (
    <div  className="w-full flex flex-col md:w-2/3 py-6">
      <button
        className="md:hidden w-4/6 h-10 bg-gray-300 hover:bg-gray-400 rounded first:mx-auto"
        onClick={toggleFilter}
      >{`جستجوی پیشرفته`}</button>
      <Filter view="sm" toggle={filter} />
      <div className="h-1/12 px-5 py-2 flex justify-between items-end border-b border-black mx-2">
        <div className="w-1/2 space-y-1">
          <h3 className="font-semibold">بوش و پیستون</h3>
          <div className="flex justify-between">
            <span className="text-xs">{`خانه > لوازم موتوری > بوش و پیستون`}</span>
            <span className="text-xs">نمایش ۰۶ ۰۹ ۱۲ ۱۵</span>
          </div>
        </div>
        <div className="flex items-end h-8">
          <select
            className="ml-2 h-8 w-40 bg-gray-200 rounded p-1 text-sm cursor-pointer"
            name="sort"
            onChange={(e) => {sortHandler(e);setChangeOption(e.target.value)}}
          >
            <option value="popular">{`پربازدید ترین`}</option>
            <option value={true}>{`ارزان ترین`}</option>
            <option value={false}>{`گران ترین`}</option>
          </select>
          <div className="h-8 w-8 flex justify-center items-center bg-red-real rounded text-white cursor-pointer hover:bg-red-700 active:bg-red-900">
            <FaSlidersH />
          </div>
        </div>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2">

      
        {products.map((element) => {
          return (
            <Card
            key={element.Codepart}
            name={element.EnPartName}
            price={element.SellPrice}
            imageUrl={`https://via.placeholder.com/80x60.png`}
            offerCount={element.OfferCount}
            offerPrice={element.Offer_SellerPrice}
            isStock={element.isStock}
            engineType={element.Engine}
            brand={element.Brand}
            partNumber={element.PartNo}
            />
            
            );
          })}
         
          </div>
         < PageInation numberOfPagesP={(numberOfPages)}/>
          </div>
  );
}
