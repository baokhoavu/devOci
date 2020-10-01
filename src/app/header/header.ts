import { Component, OnInit } from "@angular/core";
// import { DataService } from "../data.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.html",
  styleUrls: ["./header.less"],
})
export class HeaderComponent implements OnInit {
  // logoUrl = '/images/content/pagebuilder/rcto_2018_logo_rgb_full_400x178.png';
  //   logoUrl =
  //     "https://ride.conquercancer.ca/alberta20/wp-content/uploads/2019/07/rcab-200px-web.png";

  // constructor(public data: DataService) {}
  constructor() {}

  ngOnInit() {}
  // Calling on the isLoggedIn() function from the global data service to check the logged in state
  // isLoggedIn() {
  //     return this.data.isLoggedIn();
  // }
}
