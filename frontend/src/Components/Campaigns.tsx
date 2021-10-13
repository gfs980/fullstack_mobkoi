import axios from 'axios';
import React from 'react';
import { Campaign as CampaignType } from '../types';
import Campaign from './Campaign';

const Campaigns = () => {
  const [campaigns, setCampaigns] = React.useState<CampaignType[]>([]);

  const getCampaigns = async () => {
    try {
      const response = await axios.get<CampaignType[]>(
        'http://localhost:8080/api/get-campaigns'
      );
      setCampaigns(response.data);
    } catch (error) {
      console.error(error);
      if (axios.isAxiosError(error)) {
        alert(error.message);
      }
    }
  };

  React.useEffect(() => {
    getCampaigns();
  }, []);

  const setStartDate = () => {}

  return (
    <div className="list">
      {campaigns.map(campaign => (
        <Campaign
          setStartDate={setStartDate}
          setEndDate={setStartDate}
          onChangeImpressions={setStartDate}
          {...campaign} 
        />
      ))}
    </div>
  );
};

export default Campaigns;
