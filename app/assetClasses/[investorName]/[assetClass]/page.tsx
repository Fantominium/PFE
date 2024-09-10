
'use client';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { Box, Typography } from '@mui/material';
import { getInvestmentsByAssetClass } from '../../../hooks/useFetchData'

const InvestorAssetClass = () => {
    const investorName  = useParams()["investorName"]; // Access the investor name from URL params
    const assetClassName = useParams()["assetClass"];

    
    const decodedInvestorName = decodeURIComponent(investorName?.toString());
    const decodedAssetClassName = `${decodeURIComponent(assetClassName?.toString())}`

    const { data: investorData, error, isLoading } = 
    useQuery({ queryKey: ["investorData", investorName, assetClassName], 
        queryFn:()=>getInvestmentsByAssetClass(
            decodeURIComponent(investorName?.toString()),
            decodeURIComponent(assetClassName.toString())),

    });

  if (!investorData && isLoading) {
    return <Typography>{decodedInvestorName} Loading...</Typography>;

  }
  if(!investorData){
    return<Typography>{decodedInvestorName} Empty...</Typography>;
  }
  if (error) {
    return <Typography>{error.message} Error</Typography>
  }
  
  return (
    <Box sx={{ padding: 4 }}>
        
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        {decodedInvestorName}
      </Typography>
      <Typography variant="h5" component="h5" sx={{ mb: 2 }}>
        {decodedAssetClassName}
      </Typography>
      {investorData.map((datum:{commitmentAssetClass:string, commitmentCurrency:string, commitmentAmount:number})=>(
        <>
        <Typography variant="body1">
            Asset Class: {datum.commitmentAssetClass}
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

export default InvestorAssetClass;
