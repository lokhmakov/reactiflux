import { reject } from "lodash";

export const imgToBase64 = (file) => new Promise((rs, rj) => {
  const reader = new FileReader();
  if (file[0].size > 2000000) {
    console.log('File too large');
    reject(new Error(`File too large`))
  }
  reader.readAsDataURL(file[0]);
  reader.onload = () => {
    console.log(reader.result); // this is good
    resolve(reader.result)
  };
  reader.onerror = (error) => {
    console.log('Error: ', error);
    reject(error)
  };
})


{

  } catch (error) {
    return error;
  }
};