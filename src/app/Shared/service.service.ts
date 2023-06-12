import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:3000"
  addEmployee(data: any) {
    return this.http.post(`${this.url}/employeeData`, data)
  }
  getData() {
    return this.http.get(`${this.url}/employeeData`)
  }
  deleteData(data: any) {
    return this.http.delete(`${this.url}/employeeData/${data}`)
  }
  getDataId(id: any) {
    return this.http.get(`${this.url}/employeeData/${id}`)
  }
  updateData(id: any, data: any) {
    return this.http.put(`${this.url}/employeeData/${id}`, data)
  }
}
