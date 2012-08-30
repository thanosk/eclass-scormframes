/*
 *   Copyright (c) 2012 by Thanos Kyritsis
 *
 *   This file is part of eclass-scormframes.
 *
 *   eclass-scormframes is free software; you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, version 2 of the License.
 *
 *   eclass-scormframes is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with eclass-scormframes; if not, write to the Free Software
 *   Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 *
 */

var findAPITries = 0;

function loadPage() {
	console.log("loadPage()");
	var api = getAPI();
	api.formLoad();
}

function unloadPage() {
	console.log("unloadPage()");
	var api = getAPI();
	api.formLoad2();
}

function findAPI(win)
{
   while ((win.API == null) && (win.parent != null) && (win.parent != win))
   {
      findAPITries++;
      // Note: 7 is an arbitrary number, but should be more than sufficient
      if (findAPITries > 7)
      {
         alert("ERROR_FINDING_API_TOO_DEEPLY_NESTED");
         return null;
      }

      win = win.parent;

   }
   return win.API;
}

function getAPI()
{
   var theAPI = findAPI(window);
   if ((theAPI == null) && (window.opener != null) && (typeof(window.opener) != "undefined"))
   {
      theAPI = findAPI(window.opener);
   }
   if (theAPI == null)
   {
      alert("UNABLE_TO_FIND_AN_API_ADAPTER");
   }
   return theAPI;
}
