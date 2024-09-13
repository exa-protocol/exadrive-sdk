import axios from "axios";
import * as fs from 'fs';
import FormData from 'form-data';

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

    public getFile(virtualFilePath: string) {
        return axios.request({
            url: "/sdk/file/getFile/" + virtualFilePath,
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

    public uploadFile(filePath: string, virtualFilePath: string) {
        const fileBuffer = fs.createReadStream(
            filePath
          );
          const formData = new FormData();
          formData.append('file', fileBuffer);
          formData.append('virtualPath', virtualFilePath);

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

    public deleteFile(virtualFilePath: string) {
        return axios.request({
            url: "/sdk/file/deleteFile/" + virtualFilePath,
            method: 'delete',
            baseURL: this.URL,
            headers: this.getHeaders(),
        });
    }
}