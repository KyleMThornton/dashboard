import AccountsCard from "./components/AccountsCard";
import BudgetCard from "./components/BudgetCard";
import NetWorthCard from "./components/NetWorthCard";
import SpendingCard from "./components/SpendingCard";

export default function Home() {
  return (
    <main className="flex justify-center items-center">
      <div className="w-3/4 m-10 flex lg:flex-row flex-col">
        <div className="m-4">
          <BudgetCard />
          <SpendingCard />
        </div>
        <div className="m-4">
          <AccountsCard />
        </div>
        <div className="m-4">
          <NetWorthCard />
        </div>
      </div>
    </main>
  )
}
