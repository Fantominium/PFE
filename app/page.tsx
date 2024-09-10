"use client"
import { useQuery } from '@tanstack/react-query';
import { DataList } from './components/dataArea';
import { getInvestorsListAgg } from './hooks/useFetchData'

export default function Home() {

  const { data, error, isLoading } = useQuery({queryKey: ["listProps"], queryFn: getInvestorsListAgg});

  // Handle loading state
  if (isLoading) return <p>Loading...</p>;

  // Handle error state
  if (error) return <p>An error occurred: {error.message}</p>;

  // Render when data is available
  return (
    <main>
      {
        data ?    
            <DataList listProps={data} /> 
          : 
        <p>No Data available</p>
      }
    </main>
  );
}
