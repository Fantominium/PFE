import React from "react";
import { List, ListItem, ListItemText, Typography, Box } from '@mui/material';
import Link from 'next/link';

type InvestorCommitment = {
  investorName: string,
  investorType: string,
  investorCountry: string,
  investorDateAdded: string,
  investorLastUpdated: string,
  commitmentAssetClass: string,
  commitmentAmount: string,
  commitmentCurrency: string,
  investorId ?: number,
  totalCommitmentAmt : number
  };
  
type DataListProps = {
    listProps: InvestorCommitment[];
  };


// Functional component to render a list of investors
export const DataList: React.FC<DataListProps> = ({ listProps }) => {


    return (
      <List sx={{ width: '100%', maxWidth: 800, margin: 'auto', padding: 2}}>
        {listProps.map((datum) => (
        <React.Fragment key={datum?.investorDateAdded}>
         <ListItem alignItems="flex-start">
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                <Link href={`/investors/${encodeURIComponent(datum.investorName)}`} passHref>
                  <Typography
                    component="a"
                    sx={{ cursor: 'pointer', color: 'primary.main', textDecoration: 'none' }}
                  >
                    {datum.investorName}
                  </Typography>
                </Link>
              </Typography>
              <ListItemText
                primary={
                  <>
                    <Typography variant="body2" color="white">
                      {datum.investorCountry}
                    </Typography>
                    <Typography variant="body2" color="white">
                      {datum.investorType}
                    </Typography>
                    <Typography variant="body2" color="white">
                      Total Commitment: ${datum.totalCommitmentAmt.toLocaleString()}
                    </Typography>
                  </>
                }
              />
            </Box>
          </ListItem>
        <hr/>
      </React.Fragment>

        ))}
      </List>
    );
  };