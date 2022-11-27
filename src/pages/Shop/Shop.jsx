import React, { useEffect, useState } from 'react';
import { ToTopWrap } from '../../wrapper/index';
import { getShop } from '../../features/shop/shopSlice';
import { useSelector, useDispatch } from 'react-redux';
import ShopItem from './ShopItem';
import Loading from '../../components/Loading';

function Shop({ isEnglish }) {
  const dispatch = useDispatch();
  // const [shop, setShop] = useState([]);
  const { shopResult, isShopLoading } = useSelector((store) => store.shop);

  useEffect(() => {
    dispatch(getShop());
  }, []);

  // useEffect(() => {
  //   setShop(shopResult);
  // }, [shopResult]);

  if (isShopLoading) return <Loading />;

  return (
    <section className='my-6 mx-auto p-6 max-w-[100rem]'>
      <div className='flex flex-col justify-center items-center lg:grid lg:grid-cols-2 2xl:grid-cols-3'>
        {shopResult?.map((item, i) => {
          return <ShopItem key={item.slug} {...item} isEnglish={isEnglish} />;
        })}
      </div>
    </section>
  );
}

export default ToTopWrap(Shop);
