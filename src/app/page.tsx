import AccountsCard from "./components/AccountsCard";
import BudgetCard from "./components/BudgetCard";
import SpendingCard from "./components/SpendingCard";

export default function Home() {
  return (
    <main className="flex justify-center items-center">
      <div className="w-2/3 m-10">
        <BudgetCard />
        <SpendingCard />
        <AccountsCard />
      </div>
    </main>
  )
}
