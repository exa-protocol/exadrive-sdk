import axios from "axios";
import * as fs from 'fs';
import FormData from 'form-data';

export function add(a: number, b: number): number {
    return a + b;
}

console.log(add(3, 5)); //output: 8

export class ExaDrive {
    APP_ID: string = '';
    API_KEY: string = '';
    URL = 'https://exadrive-phoenix-server.exaprotocol.com';
    
    public constructor(appId: string, apiKey: string) {
        this.APP_ID = appId;
        this.API_KEY = apiKey;
    }

    private getHeaders() {
        return {
            'appID': this.APP_ID,
            'apiKey': this.API_KEY,
        }
    }

    public getFile(fileName: string) {
        return axios.request({
            url: "/sdk/file/getFile/" + fileName,
            method: 'get',
            baseURL: this.URL,
            headers: this.getHeaders(),
        });
    }

    public getAllFiles() {
        return axios.request({
            url: "/sdk/file/getAllFiles",
            method: 'get',
            baseURL: this.URL,
            headers: this.getHeaders(),
        });
    }

    public uploadFile(filePath: string) {
        const fileBuffer = fs.createReadStream(
            filePath
          );
          const formData = new FormData();
          formData.append('file', fileBuffer);

        let headers = this.getHeaders();
        let headers2 = {
            ...headers,
            'Content-Type': 'multipart/form-data'
        }

        return axios
        .post(
            this.URL + '/sdk/file/uploadFile',
          formData,
          {
            headers: headers2,
          },
        )
    }

    public deleteFile(fileName: string) {
        return axios.request({
            url: "/sdk/file/deleteFile/" + fileName,
            method: 'delete',
            baseURL: this.URL,
            headers: this.getHeaders(),
        });
    }
}