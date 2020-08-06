import * as Location from "expo-location"
import {useState, useEffect} from "react"

export default useLocation = () => {
  const [location, setLocation] = useState()
  const getLocation = async () => {
    try {
      const {granted} = await Location.requestPermissionsAsync()
      if (!granted) return
      // Location.getCurrentPositionAsync() //takes long time but best option
      const {
        coords: {latitude, longitude},
      } = await Location.getLastKnownPositionAsync()
      setLocation({latitude, longitude})
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getLocation()
  }, [])

  return location
}
