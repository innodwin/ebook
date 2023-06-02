import { useEffect, useState } from "react";
import { DashbaordCard } from "./components/DashboardCart";
import { DashbaordEmpty } from "./components/DashboardEmpty";
import { getUserOrder } from "../../services";
import { useTitle } from "../../hooks/useTitle";

export const DashboardPage = () => {
  const [orders,setOrders] = useState([]);
  useEffect(()=>{
    async function fetchOrder(){
     
    try {
      const dataResponse = await getUserOrder();
    setOrders(dataResponse);
    } catch (error) {
      
    }
    }
    fetchOrder();
  },[])
  useTitle(`Transaction History ( ${orders.length}) `)
    return (
      <main>
        <section>
          <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
        </section>
        <section>
          {orders.length && orders.map((order)=>(
            <DashbaordCard key={order.id} order ={order} />
          ))}
        </section>
        <section>
          {!orders.length && <DashbaordEmpty />}
        </section>
      </main>
    )
  }