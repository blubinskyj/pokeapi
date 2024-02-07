import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { typesRoute } from "../../utils/constants"

export const getInitialTypeData = createAsyncThunk(
  "type/initialData",
  async () => {
    try {
      const { data } = await axios.get(typesRoute)
      return data.results
    } catch (err) {
      console.error(err)
    }
  },
)
