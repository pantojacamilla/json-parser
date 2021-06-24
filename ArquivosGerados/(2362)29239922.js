    /*	The following code searches for journeys that have a connection. so the use 2 different flights&#xD;&#xA;    First of all looks for flights that are leaving from the same airport that the user indicated and stores the flight details in "deptMatches". &#xD;&#xA;    Secondly it will look for flights that have the destination that the user indicated and stores it in "destMatches". &#xD;&#xA;    Thirdly it will check if the destination code of any of the deptMatches matches the departure code of any of the destMatches.*/&#xD;&#xA;    vector < vector < string >> connectedJourney(string airpCode1, string airpCode2, vector < string > flights) {&#xD;&#xA;      vector < vector < string >> rawMatches;&#xD;&#xA;      vector < string > deptMatches;&#xD;&#xA;      for (unsigned int f1 = 0; f1 < flights.size(); f1++) {&#xD;&#xA;        //store all the fligths that match the departure airport into deptMatches&#xD;&#xA;        if (airpCode1 == flights[f1].substr(0, 3)) {&#xD;&#xA;          deptMatches.push_back(flights[f1]);&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      vector < string > destMatches;&#xD;&#xA;      for (unsigned int f2 = 0; f2 < flights.size(); f2++) {&#xD;&#xA;        //store all the fligths that match the departure airport into deptMatches&#xD;&#xA;        if (airpCode2 == flights[f2].substr(4, 3)) { //the call stack says the error is at this line &#xD;&#xA;          destMatches.push_back(flights[f2]);&#xD;&#xA;        }&#xD;&#xA;      }&#xD;&#xA;      if (deptMatches.size() == 0 || destMatches.size() == 0) {&#xD;&#xA;        // check if there won't be any matches&#xD;&#xA;        throw noEntryFound();&#xD;&#xA;      } else {&#xD;&#xA;        vector < string > cj_Matches; //connected journey matches&#xD;&#xA;        for (unsigned int g1 = 0; g1 < deptMatches.size(); g1++) {&#xD;&#xA;          for (unsigned int g2 = 0; g2 < destMatches.size(); g2++) {&#xD;&#xA;            if (deptMatches[g1].substr(4, 3) == destMatches[g2].substr(0, 3)) {&#xD;&#xA;              //if the arrival place of the first flight matches the departure place of the first flight then the details of both flights are saved into a vector within another&#xD;&#xA;              rawMatches[0].push_back(deptMatches[g1]);&#xD;&#xA;              rawMatches[1].push_back(deptMatches[g2]);&#xD;&#xA;            }&#xD;&#xA;          }&#xD;&#xA;        }&#xD;&#xA;        return rawMatches;&#xD;&#xA;      }&#xD;&#xA;    }