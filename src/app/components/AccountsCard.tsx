import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
  Subtitle,
} from "@tremor/react";

export default function AccountsCard() {
    let checkingBalance = 1000000;
    let savingsBalance = 1000000;
    let creditCardBalance = 1000000;
    let mortgageBalance = 1000000;
    let investmentBalance = 1000000;
    let retirementBalance = 1000000;
    let homeValue = 1000000;
    let carValue = 1000000;
    let personalLoanBalance = 1000000;

    return (
        <Card className="max-w-md mx-auto" decoration="top" decorationColor="indigo">
            <Title>Accounts</Title>
            <Subtitle className="mt-3">Cash</Subtitle>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Balance</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow className="hover:bg-slate-100">
                        <TableCell>
                            <Text className="flex items-center">
                                Checking
                            </Text>
                        </TableCell>
                        <TableCell>$ 1,000,000.00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Text className="flex items-center">
                                Savings
                            </Text>
                        </TableCell>
                        <TableCell>$ 1,000,000.00</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Card>
    )
}