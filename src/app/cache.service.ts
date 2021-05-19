import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private timeStampKey = "lastCacheTime"

  constructor() { }

  getItem(key : string) : string{
    let currentTime = Math.floor(Date.now() / 1000)
    let timeStr = localStorage.getItem(this.timeStampKey)
    let lastCacheTime = Math.floor(parseInt(timeStr,10))
    if(!lastCacheTime) lastCacheTime = Math.floor(parseInt("1000000000",10))

    let hoursDiff = Math.floor((currentTime - lastCacheTime)/1000/60/60);
    if(hoursDiff > 1) return null

    return localStorage.getItem(key)
  }

  setItem(key : string, value: string){
    localStorage.setItem(key, value)
    localStorage.setItem(this.timeStampKey, Math.floor(Date.now() / 1000).toString())
  }

}
