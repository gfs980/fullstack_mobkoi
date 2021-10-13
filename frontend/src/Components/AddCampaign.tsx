import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Campaign from './Campaign';

const AddCampaign = () => {
  const router = useHistory();
  const [targetImpressions, setTargetImpressions] = React.useState<number>(1);
  const [endDate, setEndDate] = React.useState<number>(new Date().getTime());
  const [startDate, setStartDate] = React.useState<number>(new Date().getTime());

  const addCampaign = async () => {
    if (startDate >= endDate) {
      alert('start day is later or the same as the end day');
      return;
    }
    if (!targetImpressions) {
      alert('target impressions is empty');
      return;
    }
    try {
      await axios.post(
        'http://localhost:8080/api/add-campaign',
        {
          startDate: new Date(startDate).getTime(),
          endDate: new Date(endDate).getTime(),
          targetImpressions: targetImpressions,
        }
      );
      router.push('/')
    } catch (error) {
      console.error(error);
      if (axios.isAxiosError(error)) {
        alert(error.message);
      }
    }
  };

  const onChangeImpressions = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTargetImpressions(parseInt(event.target.value))
  }

  return (
    <>
      <Campaign 
        setStartDate={setStartDate} 
        setEndDate={setEndDate} 
        onChangeImpressions={onChangeImpressions} 
        id={''} 
        startDate={startDate} 
        endDate={endDate} 
        targetImpressions={targetImpressions}
      />

      <button onClick={addCampaign} className="create-btn">
        Add Campaign
      </button>
    </>
  );
};

export default AddCampaign;
