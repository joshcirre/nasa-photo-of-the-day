import React, { useState, createContext, useEffect, useContext } from "react";
import dayjs from 'dayjs'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import Header from "./Components/Header"
import ImageContainer from "./Components/ImageContainer"
import PrevNextButton from './Components/NextPrevButtons'
import API from "./Utils/pullNasaPics"

const Context = createContext()

function App() {
  const [pictureList, setPictureList] = useState([])
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'))
  const [selectedDate] = useState(new Date())

  useEffect(() => {
    let exists = false
    pictureList.forEach((picture) => {
      (picture.date === date) && (exists = true)
    })
    console.log(exists)
    if (!exists) {
      API.get(`/planetary/apod?api_key=E9wG0ACNlwsXfFQUPkrZoVKNlAhTFaY7v3ldzkpq&date=${date}`)
        .then((res) => {
          setPictureList(list => [...list, res.data])
        })
        .catch((err) => console.log(err))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date])

  const handleClick = (days) => {
    setDate(dayjs(date).add(`${days}`, 'days').format('YYYY-MM-DD'))
  }

  const isDisabled = date === dayjs().format('YYYY-MM-DD')

  return (
    <div className="App">
      <Context.Provider value={{ pictureList, setPictureList, date, setDate }}>
        <Header>
          <h1><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 145 40">
  <defs xmlns="http://www.w3.org/2000/svg">
    <clipPath id="a">
      <path d="M0 0h145v39H0z"/>
    </clipPath>
  </defs>
  <path d="M5 39V10a6 6 0 016-6 5.993 5.993 0 015.644 3.988l6.712 24.024A5.993 5.993 0 0029 36a6 6 0 006-6V1" stroke="#3F3D56" stroke-width="8" fill="none"/>
  <path d="M40.5 41.5L51.356 7.988A5.992 5.992 0 0157 4a5.992 5.992 0 015.644 3.988L73.5 41.5" stroke="#3F3D56" stroke-width="8" clip-path="url(#a)" fill="none"/>
  <path d="M104 5H84.494a7.503 7.503 0 00-7.504 7.502 7.505 7.505 0 007.51 7.502h10A7.5 7.5 0 1194.5 35L74 34.992" stroke="#3F3D56" stroke-width="8" stroke-miterlimit="0" fill="none"/>
  <path d="M106.625 41.5L117.5 7.988a6.002 6.002 0 0111.308 0L139.683 41.5" stroke="#3F3D56" clip-path="url(#a)" stroke-width="8" fill="none"/>
</svg> Picture of the Day</h1>
          <div>
            <PrevNextButton nav='prev' onClick={() => { handleClick(-1) }} />
            <DatePicker dateFormat='yyyy-MM-dd' selected={selectedDate} value = {date} onChange={newDate => setDate(dayjs(newDate).format('YYYY-MM-DD'))}></DatePicker>
            <PrevNextButton nav='next' onClick={() => { handleClick(1) }} disabled={isDisabled} />
          </div>
          {console.log(date)}
        </Header>
        <ImageContainer />
      </Context.Provider>
    </div>
  );
}

export function useAppContext() {
  return useContext(Context)
}
export default App;