export default function formatDate(dateString) {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('en', options);
  
    // const day = formattedDate.split(' ')[0];
    // const month = formattedDate.split(' ')[1];
    // const year = formattedDate.split(' ')[2].slice(-2); // Extract last two digits of the year
  
    return `${formattedDate}`;
    // return `${day} ${month} / ${year}`;
  }
  

  