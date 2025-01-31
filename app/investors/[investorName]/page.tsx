
'use client';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { Box, Typography } from '@mui/material';
import { getSingleInvestorCommitments } from '../../hooks/useFetchData'
import Link from 'next/link';


const InvestorDetailPage = () => {
    const investorName  = useParams()["investorName"]; // Access the investor name from URL params

    const decodedInvestorName = `${decodeURIComponent(investorName?.toString())}`;
    
    const { data: investorData, error, isLoading } = 
    useQuery({ queryKey: ["investorData", investorName], 
        queryFn:()=>getSingleInvestorCommitments(decodeURIComponent(investorName?.toString())),
    });

  if (!investorData && isLoading) {
    return <Typography>{decodedInvestorName} Loading...</Typography>;

  }
  if (error) {
    return <Typography>{error.message} Error</Typography>
  }
  
  return (
    <Box sx={{ padding: 4 }}>
        
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        {decodedInvestorName}
      </Typography>
      {investorData.map((datum:{commitmentAssetClass:string, commitmentCurrency:string, commitmentAmount:number})=>(
        <>
        <Typography variant="h6" component="h2" 
        sx={{ cursor: 'pointer', color: 'primary.main', textDecoration: 'none' }}
        >
          <Link 
          href=
          {`/assetClasses/${investorName.toString()}/${encodeURIComponent(datum.commitmentAssetClass)}`} 
          passHref>
            <Typography variant="body1">
                Asset Class: {datum.commitmentAssetClass}
            </Typography>
          </Link>
          </Typography>
        <Typography variant="body1">
            Currency: {datum.commitmentCurrency}
        </Typography>
        <Typography variant="body1">
            Amount: {datum.commitmentAmount}
        </Typography>
        <br/>
        </>
      ))
}
    </Box>
  );
};

export default InvestorDetailPage;
