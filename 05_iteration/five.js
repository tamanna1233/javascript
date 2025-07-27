// const coding =["js","ruby","python","c++","java"]

// const values =coding.forEach((item)=>{
// return item

// })

// console.log(values);//undefined // foreach doesnot  return a values



//filter
const myNum = [ 1,2,3,4,5,6,7,8,9,10]
const num = myNum.filter((num)=>{return num > 4})

console.log(num);

//

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  const Science = books.filter((item)=>(item.genre=="Science"))
//   console.log(Science);

  const history = books.filter((item)=>(item.genre=='History'))
//   console.log(history);

const publish = books.filter((item)=>(item.publish >= 2000))
  console.log(publish);
  
  


