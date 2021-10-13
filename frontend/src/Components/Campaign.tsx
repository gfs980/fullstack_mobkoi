import React from 'react'
import DateTimePicker from 'react-datetime-picker';
import { Campaign as CampaignType } from '../types';

interface CampaignProps extends CampaignType {
    setStartDate: React.Dispatch<React.SetStateAction<number>>
    setEndDate: React.Dispatch<React.SetStateAction<number>>
    onChangeImpressions: (value: React.ChangeEvent<HTMLInputElement>) => void
}

const Campaign:React.FC<CampaignProps> = (props) => {
    return (
        <div className='rows'>
            <div className='group'>
                <span>Start Date</span>
                <DateTimePicker
                    style={{ height: 150 }}
                    value={new Date(props.startDate)}
                    onChange={props.setStartDate}
                />
            </div>
            
            <div className='group'>
                <span>End Date</span>
                <DateTimePicker
                    style={{ height: 150 }}
                    value={new Date(props.endDate)}
                    onChange={props.setEndDate}
                />
            </div>

            <div className='group'>
                <span>Target impressions</span>
                <input 
                    type="number"
                    value={props.targetImpressions}
                    className="input"
                    placeholder={"Enter Value"}
                    onChange={props.onChangeImpressions}
                    min={1}
                />
            </div>
        </div>
    )
}

export default Campaign