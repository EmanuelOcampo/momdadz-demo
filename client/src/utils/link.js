import { IoBarChartSharp } from 'react-icons/io5';
import { BsCalendar2Date } from 'react-icons/bs'
import { TfiGallery} from 'react-icons/tfi';
import { ImProfile } from 'react-icons/im';
import { HiOutlineUserAdd } from 'react-icons/hi' 
import {BiBookmarkAltPlus} from 'react-icons/bi'
const link = [
    {
        id:1,
        text:'statistics',
        path:'/',
        icon:<IoBarChartSharp />
    },
    {
        id:2,
        text:'bookings',
        path:'bookings',
        icon:<BiBookmarkAltPlus />
    },
    {
        id:3,
        text:'calendar',
        path:'calendar',
        icon:<BsCalendar2Date />
    },
    {
        id:4,
        text:'upload gallery',
        path:'upload-gallery',
        icon:<TfiGallery />
    },
    {
        id:5,
        text:'add admin',
        path:'add-admin',
        icon:<HiOutlineUserAdd />
    },
    {
        id:6,
        text:'profile',
        path:'profile',
        icon:<ImProfile />
    }
    
]

export default link