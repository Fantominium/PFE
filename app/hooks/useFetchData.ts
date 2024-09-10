import axios from 'axios';

export const getInvestorsListAgg = async() => {
    const baseUrl = 'http://localhost:8181/investors';

    try {
        const res = await axios.get(`${baseUrl}/investorList`)
        if (res.status == 200)
            return res.data;
    } catch (error) {
        return error;
    }
} 

export const getSingleInvestorCommitments = async (investorName: any) => {
    
    try {
        const baseUrl = 'http://localhost:8181/investors';

        const res = await axios.get(`${baseUrl}?investor_name=${encodeURIComponent(investorName)}`);
            
        if (res.status == 200)
        {
            return res.data;
            
        }
    } catch (error) {
        console.log('something went wrong');

        throw error;
    }
}

export const getInvestmentsByAssetClass = async (investorName: any, assetClass: any) => {
    try {
        const baseUrl = 'http://localhost:8181/investors';

        const res = await axios.get(`${baseUrl}/commitmentsByClass?investor_name=${encodeURIComponent(investorName)}&asset_class=${encodeURIComponent(assetClass)}`);
            
        if (res.status == 200){
                return res.data;         
        }
    } catch (error) {
        console.log('something went wrong');

        throw error;
    }
}