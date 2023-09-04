import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";

const apiserverUrl = "http://localhost:8000";

interface ApiResponse<T> {
  data: T | null;
  error: {
    message: string;
  } | null;
}

//logSearch
export const logSearch = async (
  crypto: string,
  dataRange: string
): Promise<ApiResponse<any>> => {
  const config: AxiosRequestConfig = {
    url: `${apiserverUrl}/api/logSearch`,
    method: "GET",
    params: {
      crypto: crypto,
      dataRange: dataRange,
    },
  };

  try {
    const response: AxiosResponse = await axios(config);
    const { data } = response;
    return { data, error: null };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      let message = "HTTP request failed";

      if (axiosError.response && axiosError.response.statusText) {
        message = axiosError.response.statusText;
      }

      return { data: null, error: { message } };
    } else {
      return { data: null, error: { message: "Unknown error" } };
    }
  }
};

//logSelect
//logSelect
export const logSelected = async (crypto: {
  crypto: string;
  dataRange: string;
}): Promise<ApiResponse<any>> => {
  const config: AxiosRequestConfig = {
    url: `${apiserverUrl}/api/logSelected`,
    method: "GET",
    params: crypto,
  };

  try {
    const response: AxiosResponse = await axios(config);
    const { data } = response;
    return { data, error: null };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      let message = "HTTP request failed";

      if (axiosError.response && axiosError.response.statusText) {
        message = axiosError.response.statusText;
      }

      return { data: null, error: { message } };
    } else {
      return { data: null, error: { message: "Unknown error" } };
    }
  }
};
