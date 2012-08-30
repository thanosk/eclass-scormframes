<?php
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
?>
<html>
<head>
<title>main</title>
<script type="text/javascript">
function APIClass() {
	this.formLoad = formLoad;
	this.formLoad2 = formLoad2;
}

function formLoad() {
	console.log("formLoad()");
	cmiform = formFrame.document.cmiForm;
	cmiform.koko.value = 1;
    cmiform.submit();
}

function formLoad2() {
	console.log("formLoad2()");
	cmiform = formFrame.document.cmiForm;
	cmiform.koko.value = 2;
	cmiform.submit();
}

API = new APIClass();
</script>
</head>

<frameset border='2' rows='100, 60, *' frameborder="yes">
	<frame src='form.php' name='formFrame'/>
	<frame src='tocup.php' name='tocUp'/>
	<frameset border='2' cols='180,*' frameborder='yes'>
		<frame src='tocleft.php' name='tocLeft'/>
		<frame src='main.php' name='mainFrame'/>
	</frameset>
</frameset>

<body>
</body>


</html>