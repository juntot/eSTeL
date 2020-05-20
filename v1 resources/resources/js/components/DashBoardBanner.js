import React, {useEffect, useState} from 'react';
const moment = window.moment.tz.setDefault('Asia/Manila');

const DashBoardBanner = (props) => {


    const [date, setDate] = useState(moment().format('ddd MMM DD, YYYY hh:mm:ss A'));
    // const [time, setTime] = useState(moment().format('HH:mm:ss'));
    const [cutoff, setCutOff] = useState(true);
    const [cutoff_range, setCutOff_Range] = useState('');
    
    
    
    let isClose = (time) =>{
        // let result = false;
        if(!Object.keys(props.cut_off).length){
            return;
        }

        
        let format = 'hh:mm:ss';
        // 11 AM
            let first_time = moment(time, format),
                firstbeforeTime = moment(props.cut_off.cutoff_eleven_am, format),
                firstafterTime = moment(props.cut_off.end_cutoff_eleven_am, format);
            
            
            if(first_time.isBetween(firstbeforeTime, firstafterTime)){
            return setCutOff(true);
            }
            
            // cutoff range
            if(first_time.isBefore(firstafterTime) && !first_time.isAfter(firstafterTime)){
                setCutOff_Range(moment(firstbeforeTime).format('hh:mm:ss A')+' - '+moment(firstafterTime).format('hh:mm:ss A'));
            }
        

        //  4 PM
            let second_time = moment(time, format),
            second_beforeTime = moment(props.cut_off.cutoff_four_pm, format),
            second_afterTime = moment(props.cut_off.end_cutoff_four_pm, format);

        
            if(second_time.isBetween(second_beforeTime, second_afterTime)){
                return setCutOff(true);
            }

            // cut off range
            if(second_time.isAfter(firstafterTime) && !second_time.isAfter(second_afterTime)){
                setCutOff_Range(moment(second_beforeTime).format('hh:mm:ss A')+' - '+moment(second_afterTime).format('hh:mm:ss A'));
            }

        
        // 9 PM
            let third_time = moment(time, format),
                third_beforeTime = moment(props.cut_off.cutoff_nine_pm, format),
                thid_afterTime = moment(props.cut_off.end_cutoff_nine_pm, format);

            if(third_time.isBetween(third_beforeTime, thid_afterTime)){
                
                return setCutOff(true)
            }

            // cut off range
            if(third_time.isAfter(second_afterTime) && !third_time.isAfter(thid_afterTime)){
                 setCutOff_Range(moment(third_beforeTime).format('hh:mm:ss A')+' - '+moment(thid_afterTime).format('hh:mm:ss A'));
            }
            
        return setCutOff(false);
        
    }
    useEffect(()=>{
       let timeinterval=  setInterval(()=>{
            setDate(moment().format('ddd MMM DD, YYYY hh:mm:ss A'));
            isClose(moment().format('HH:mm:ss'));        
        },1000);
        // unmount
        return ()=>{
            clearInterval(timeinterval);
        }
    })
    
    
    return ( 
        <div className="col s12 metronic-white-bg dashboard-header relative">
            <div className="center-align main">
                <div className="relative">
                    <h5><b>{props.title}</b></h5>
                    <p>
                        <span className="bold uppercase">
                            {moment(props.cut_off.datedraw).format('MMMM DD, YYYY')}
                            {' - '+ (props.cut_off.drawsched ||'')}
                        </span><br/>
                        {/* CUTOFF TIME 10:50:00 AM - 11:30:00 AM<br/> */}
                        CUTOFF TIME {cutoff_range}<br/>
                        {date}<br/>
                        
                       
                    </p>
                    <div className="absolute bet-status right-align blink">
                        {
                            cutoff?
                            <img src={'public/imgs/bet_closed.png'}/>
                            :
                            <img src={'public/imgs/bet_open.png'}/>
                        }
                        
                    </div>
                </div>
                
                
            </div>
            
        </div>
     );
}
 
export default DashBoardBanner;