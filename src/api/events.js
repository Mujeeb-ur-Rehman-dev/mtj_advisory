import eimg1 from '../images/event/1.jpg'
import eimg2 from '../images/event/2.jpg'
import eimg3 from '../images/event/3.jpg'

import elimg1 from '../images/event/img-1.jpg'
import elimg2 from '../images/event/img-2.jpg'
import elimg3 from '../images/event/img-3.jpg'

import eSimg1 from '../images/event/1.jpg'
import eSimg2 from '../images/event/1.jpg'
import eSimg3 from '../images/event/1.jpg'



const Events = [
    {
       Id:'1',
       eImg:eimg1,
       elImg:elimg1,
       eSimg:eSimg1,
       thumb:'Conference',   
       title:'Exploring Islamic Insights and Wisdom',  
       slug:'Exploring-Islamic-Insights-and-Wisdom',
       date:'July 2, 2024',
       time:'15:00 - 19:00',
       location:'85 Preston Rd. Inglewood, Maine 980',
       progress:'90',
       raised:'2000.00',
       goal:'3000.00',
       type: 'event',
       description: 'Join us for an enlightening conference where we explore the depths of Islamic wisdom and insights. This event brings together scholars, community leaders, and individuals seeking spiritual growth and understanding of Islamic principles.'
    },
    {
       Id:'2',
       eImg:eimg2,
       elImg:elimg2,
       eSimg:eSimg2,
       thumb:'Entertainment',    
       title:'Embarking on a Journey of Reflection', 
       slug:'Embarking-on-a-Journey-of-Reflection',
       date:'July 5, 2024',
       time:'10:00 - 15:00',
       location:'85 Preston Rd. Inglewood, Maine 980',
       progress:'80',
       raised:'3000.00',
       goal:'4000.00',
       type: 'event',
       description: 'A transformative journey of self-reflection and spiritual growth. This event provides a unique opportunity to connect with your inner self and strengthen your faith through guided meditation and spiritual practices.'
    },
    {
      Id:'3',
      eImg:eimg3,
      elImg:elimg3,
      eSimg:eSimg3,
      thumb:'Conference',   
      title:'Strengthening Faith and Community',  
      slug:'Strengthening-Faith-and-Community',
      month:'25',
      date:'July 5, 2024',
      time:'13:00 - 16:00',
      location:'85 Preston Rd. Inglewood, Maine 980',
      progress:'95',
      raised:'4000.00',
      goal:'5000.00',
      type: 'event',
      description: 'Building stronger communities through faith and understanding. This conference focuses on how Islamic values can strengthen community bonds and create a more harmonious society.'
   },
   {
      Id:'4',
      eImg:eimg2,
      elImg:elimg2,
      eSimg:eSimg2,
      thumb:'News',    
      title:'New Islamic Center Opening in Downtown', 
      slug:'New-Islamic-Center-Opening',
      date:'July 10, 2024',
      time:'10:00 - 12:00',
      location:'Downtown Islamic Center, Main Street',
      progress:'100',
      raised:'5000.00',
      goal:'5000.00',
      type: 'news',
      description: 'Exciting news! We are pleased to announce the opening of our new Islamic Center in downtown. This state-of-the-art facility will serve as a hub for community activities, education, and spiritual growth.'
   },
   {
      Id:'5',
      eImg:eimg1,
      elImg:elimg1,
      eSimg:eSimg1,
      thumb:'News',    
      title:'Community Outreach Program Success', 
      slug:'Community-Outreach-Program-Success',
      date:'July 15, 2024',
      time:'14:00 - 16:00',
      location:'Community Hall, Central District',
      progress:'100',
      raised:'3000.00',
      goal:'3000.00',
      type: 'news',
      description: 'Our community outreach program has achieved remarkable success, helping over 500 families in need. This initiative demonstrates the power of Islamic values in action and community solidarity.'
   },
   {
      Id:'6',
      eImg:eimg3,
      elImg:elimg3,
      eSimg:eSimg3,
      thumb:'Event',    
      title:'Youth Leadership Workshop', 
      slug:'Youth-Leadership-Workshop',
      date:'July 20, 2024',
      time:'09:00 - 17:00',
      location:'Youth Center, Education District',
      progress:'75',
      raised:'1500.00',
      goal:'2000.00',
      type: 'event',
      description: 'Empowering the next generation of Muslim leaders through our comprehensive youth leadership workshop. This program focuses on developing leadership skills, Islamic values, and community service.'
   }
    
]

export default Events;