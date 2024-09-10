import axios from 'axios';
import { log } from 'console';

export const getInvestorsListAgg = async() => {
    try {
        const res = await axios.get("http://localhost:8080/investors/investorList")
        if (res.status == 200)
            return res.data;
    } catch (error) {
        return error;
    }
} 

export const getSingleInvestorCommitments = async (investorName: any) => {
    
    try {
        const baseUrl = 'http://localhost:8080/investors';

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

export const updateBooking = async (booking: any) => {
    try {
        const res = await axios.put(`http://localhost:8080/updateBookings/${booking.id}`, {body: booking})
        if(res.status == 200 ){
            return{
                success: true,
                message: "Booking Updated"
            }
        }
    } catch (error) {
        
    }
}