import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { faCog, faWindowMinimize, faWindowMaximize, faTimes, faEllipsisH, faPhone, faUserAlt, faChevronUp, faHandPointUp, faMicrophone, faMusic, faEnvelope, faMobileAlt, faGlobe, faAddressBook, faIdCard, faTasks, faBook, faHome, faCalculator, faMicrophoneSlash, faFolderMinus, faPhoneSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'rekrutacja919';
  faCog = faCog;
  faWindowMinimize = faWindowMinimize;
  faWindowMaximize = faWindowMaximize;
  faTimes = faTimes;
  faEllipsisH = faEllipsisH;
  faPhone = faPhone;
  faUserAlt = faUserAlt;
  faChevronUp = faChevronUp;
  faHandPointUp = faHandPointUp;
  faMicrophone = faMicrophone;
  faMusic = faMusic;
  faEnvelope = faEnvelope;
  faMobileAlt = faMobileAlt;
  faGlobe = faGlobe;
  faAddressBook = faAddressBook;
  faIdCard = faIdCard;
  faTasks = faTasks;
  faBook = faBook;
  faHome = faHome;
  faCalculator = faCalculator;
  faMicrophoneSlash = faMicrophoneSlash;
  faFolderMinus = faFolderMinus;
  faPhoneSlash = faPhoneSlash;


  selComponent = 1;
  selTab = 1;

  accountDropdownActive = false;
  inputDropdownActive = false;
  musicDropdownActive = false;
  newmailDropdownActive = false;
  finishworkDropdownActive = false;
  joincampDropdownActive = false;

  ongoingCall = false;

  ngOnInit() {
    
    
    window.onclick = (e) => {

      const target = e.target as HTMLTextAreaElement;

      // if (!target.matches('.dropbtn') && !target.matches('.dropdownItem') && !target.parentElement.parentElement.parentElement.matches('.dropbtn')) {
      if (!target.matches('.dropbtn') && !target.matches('.dropdownItem') && !target.parentElement.parentElement.parentElement.matches('.dropbtn') && !target.parentElement.parentElement.matches('.dropbtn') && !target.parentElement.matches('.dropbtn') && !target.parentElement.parentElement.parentElement.parentElement.matches('.dropbtn')) {

        this.accountDropdownActive = false;
        this.inputDropdownActive = false;
        this.musicDropdownActive = false;
        this.newmailDropdownActive = false;
        this.finishworkDropdownActive = false;
        this.joincampDropdownActive = false;

      }
    }

  }

  selSet() {
    this.selComponent = 0;
  }

  selStart() {
    this.selComponent = 1;
  }

  selTools() {
    this.selComponent = 2;
  }

  selConf() {
    this.selComponent = 3;
  }

  selCall() {
    this.selComponent = 4;
  }

  accountDropdownToggle() {
    //// TURN OFF OTHER TOGGLES
    this.inputDropdownActive = false;
    this.musicDropdownActive = false;
    this.newmailDropdownActive = false;
    this.finishworkDropdownActive = false;
    this.joincampDropdownActive = false;
    //// TURN OFF OTHER TOGGLES

    this.accountDropdownActive = !this.accountDropdownActive;
  }

  inputDropdownToggle() {
    //// TURN OFF OTHER TOGGLES
    this.accountDropdownActive = false;
    this.musicDropdownActive = false;
    this.newmailDropdownActive = false;
    this.finishworkDropdownActive = false;
    this.joincampDropdownActive = false;
    //// TURN OFF OTHER TOGGLES

    this.inputDropdownActive = !this.inputDropdownActive;
  }

  musicDropdownToggle() {
    //// TURN OFF OTHER TOGGLES
    this.accountDropdownActive = false;
    this.inputDropdownActive = false;
    this.newmailDropdownActive = false;
    this.finishworkDropdownActive = false;
    this.joincampDropdownActive = false;
    //// TURN OFF OTHER TOGGLES

    this.musicDropdownActive = !this.musicDropdownActive;
  }

  newmailDropdownToggle() {
    //// TURN OFF OTHER TOGGLES
    this.accountDropdownActive = false;
    this.inputDropdownActive = false;
    this.musicDropdownActive = false;
    this.finishworkDropdownActive = false;
    this.joincampDropdownActive = false;
    //// TURN OFF OTHER TOGGLES

    this.newmailDropdownActive = !this.newmailDropdownActive;
  }

  finishworkDropdownToggle() {
    //// TURN OFF OTHER TOGGLES
    this.accountDropdownActive = false;
    this.inputDropdownActive = false;
    this.musicDropdownActive = false;
    this.newmailDropdownActive = false;
    this.joincampDropdownActive = false;
    //// TURN OFF OTHER TOGGLES

    this.finishworkDropdownActive = !this.finishworkDropdownActive;
  }

  joincampDropdownToggle() {
    //// TURN OFF OTHER TOGGLES
    this.accountDropdownActive = false;
    this.inputDropdownActive = false;
    this.musicDropdownActive = false;
    this.newmailDropdownActive = false;
    this.finishworkDropdownActive = false;
    //// TURN OFF OTHER TOGGLES

    this.joincampDropdownActive = !this.joincampDropdownActive;
  }

  selHomeTab() {
    this.selTab = 0;
  }

  selCallTab() {
    this.selTab = 1;
  }

  startCall() {
    if(this.ongoingCall == true) {
      this.selComponent = 1;
    }
    else {
      this.selComponent = 4;
    }

    this.ongoingCall = !this.ongoingCall;
  }

}
