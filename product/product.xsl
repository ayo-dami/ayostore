<?xml version="1.0"?>
<xsl:stylesheet version="1.0" 
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	

<xsl:template match="/product">
<HTML>
	<HEAD>
            <TITLE>Products</TITLE>
        <link rel="stylesheet" type="text/css" href="../stylesheet/styles.css" />
        <script src="script.js">//</script>

    </HEAD>
<body onload="displayProduct(); displayProduct2(); displayProduct3(); displayProduct4();">
<ul class="nav">
	
	<li><a href="../index.html">Home</a></li>
	<li><a href="../product/devices.xml">Products</a></li>
	<li><a href="../order.html">Order</a></li>
	<li><a href="../report.html">Report</a></li>
</ul>
<div id="header">
	<div class="title">Ayo's<br/> Electronic World</div>
	<div class="title-sub">The Number one online store.</div>
	<img src="../img/stars.png" height="25"/>
</div>




<div id="top"><img src="../img/store.png" width="25px" height="20px"/> Shopping Page </div>
<div  class="product-container">
	<h1> Featured </h1>
	<div class="product-box">
	<xsl:for-each select="iphone">
		<img src="img/iphonex.jpg" style="border: 1px solid #ccc;"/>
		<div style="margin-top:10px;">		
			<b>Title: </b><xsl:value-of select="title" /><br />
			<b>Company: </b><xsl:value-of select="company" /><br />
			<b>Price: </b><xsl:value-of select="price" /><br />
			<b>Year: </b><xsl:value-of select="year" /><br />

		</div>
	</xsl:for-each>
	</div>
	<!-- -->
	<div class="product-box">
	<xsl:for-each select="samsung">
		<img src="img/samsung.jpg" style="border: 1px solid #ccc;"/>
		<div style="margin-top:10px;">
			<b>Title: </b><xsl:value-of select="title" /><br />
			<b>Company: </b><xsl:value-of select="company" /><br />
			<b>Price: </b><xsl:value-of select="price" /><br />
			<b>Year: </b><xsl:value-of select="year" /><br />
		</div>
	</xsl:for-each>
	</div>
	<!-- -->
	<div class="product-box">
	<xsl:for-each select="iphone">
		<img src="img/google.jpg" style="border: 1px solid #ccc; "/>
		<div style="margin-top:10px;">
			<b>Title: </b><xsl:value-of select="title" /><br />
			<b>Company: </b><xsl:value-of select="company" /><br />
			<b>Price: </b><xsl:value-of select="price" /><br />
			<b>Year: </b><xsl:value-of select="year" /><br />
		</div>	
	</xsl:for-each>
	</div>
</div>

<div class="product-container">	
		<h1>Product with great values</h1>
		<!-- more query highest and cheapest -->


	<div class="product-box">
	<h2> PCS &gt; £500 </h2>	
	<xsl:for-each select="pcs">
	<div style="margin-top:10px;">
		
		<xsl:if test="price &gt; 500">
		<p><img style="border: 1px solid #ccc;">
		    <xsl:attribute name="src">
		     img/<xsl:value-of select="image"/>
		    </xsl:attribute>
		</img></p>	
			<b>Title: </b><xsl:value-of select="title" /><br />
			<b>Company: </b><xsl:value-of select="company" /><br />
			<b>Price: </b>£<xsl:value-of select="price" /><br />
			<b>Year: </b><xsl:value-of select="year" /><br />
		</xsl:if>	
	</div>
	</xsl:for-each>
	</div>

	<div class="product-box">
	<h2> Dones &#x3c; £700 </h2>	
	<xsl:for-each select="drones">
	<div style="margin-top:10px;">
		<xsl:if test="price &#x3c; 700">
			<p><img style="border: 1px solid #ccc;">
			    <xsl:attribute name="src">
			     img/<xsl:value-of select="image"/>
			    </xsl:attribute>
			</img></p>		
			<b>Title: </b><xsl:value-of select="title" /><br />
			<b>Company: </b><xsl:value-of select="company" /><br />
			<b>Price: </b>£<xsl:value-of select="price" /><br />
			<b>Year: </b><xsl:value-of select="year" /><br />
		</xsl:if>	
	</div>
	</xsl:for-each>
	</div>

	<div class="product-box">
	<h2> Phones &#x3c; £500 </h2>	
	<xsl:for-each select="phones">
	<div style="margin-top:10px;">
		<xsl:if test="price &#x3c; 500">
			<p><img style="border: 1px solid #ccc;">
			    <xsl:attribute name="src">
			     img/<xsl:value-of select="image"/>
			    </xsl:attribute>
			</img></p>	
			<b>Title: </b><xsl:value-of select="title" /><br />
			<b>Company: </b><xsl:value-of select="company" /><br />
			<b>Price: </b>£<xsl:value-of select="price" /><br />
			<b>Year: </b><xsl:value-of select="year" /><br />
		</xsl:if>	
	</div>
	</xsl:for-each>
	</div>

	<div class="product-box">
	<h2> TVs &gt; £99.99 </h2>	
	<xsl:for-each select="tvs">
	<div style="margin-top:10px;">
		<xsl:if test="price &gt; 99.99">
			<p><img style="border: 1px solid #ccc;">
			    <xsl:attribute name="src">
			     img/<xsl:value-of select="image"/>
			    </xsl:attribute>
			</img></p>		
			<b>Title: </b><xsl:value-of select="title" /><br />
			<b>Company: </b><xsl:value-of select="company" /><br />
			<b>Price: </b>£<xsl:value-of select="price" /><br />
			<b>Year: </b><xsl:value-of select="year" /><br />
		</xsl:if>	
	</div>
	</xsl:for-each>
	</div>


</div>


<div  class="product-container">
	<h1>Other Products</h1>
	<div>
		<table style="text-align:center; margin:0 auto;">
			<tr>
				
			</tr>
			<tr>
				<td> </td>
				<td>Gaming Pcs</td>
				<td>Drones</td>
				<td>Phones</td>
				<td>Television</td>
				<td> </td>
			</tr>
			<tr>
				<td><button onclick="previous();">Left</button></td>
				<td>
					<span id='showPC'></span>
					
					
				</td>

				<td>
					<span id='showDrone'></span>
				</td>
				<td><span id='showPhone'></span></td>
				<td> <span id='showTv'></span></td>

				<td><button onclick="next();">Right</button></td>
			</tr>



		</table>
	</div>
<div  class="product-container">

	<h2>Archive of Products</h2>
	
	<form>
	<label>Search by: </label>
	<select id="type" name="search">
		<option value="pcs">PCs</option>
     	<option value="drones">Drones</option>
     	<option value="phones">Phones</option>
     	<option value="tvs">TVs</option>
	</select>

	<select id="query" name="price">
    <option value="less">&gt; 100</option>
    <option value="greater">&#x3c; 100</option>
  	</select> 

	<input type="submit"></input>
	</form>
	<table style="width:100%; text-align:center;" >
		<tr style="background-color:#B93A32; color:#fff;">
			<th>Table</th>
			<th>Price</th>
		</tr>
		<xsl:for-each select="pcs">

		<tr>
			<th><xsl:value-of select="title"/></th>
		      <xsl:choose>

		        <xsl:when test="@lessthan">
		          <td style="background-color:#FFCC00;">
		          	<xsl:value-of select="price "/></td>
		        </xsl:when>

		        <xsl:otherwise>
		          <td><xsl:value-of select="price"/></td>
		        </xsl:otherwise>

		      </xsl:choose>			
		</tr>
		</xsl:for-each>

		<xsl:for-each select="drones">

		<tr>
			<th><xsl:value-of select="title"/></th>
		      <xsl:choose>

		        <xsl:when test="price &#x3c; 600">
		          <td style="background-color:#ff00ff;">
		          	<xsl:value-of select="price"/></td>
		        </xsl:when>

		        <xsl:otherwise>
		          <td><xsl:value-of select="price"/></td>
		        </xsl:otherwise>

		      </xsl:choose>			
		</tr>
		</xsl:for-each>

		<xsl:for-each select="phones">

		<tr>
			<th><xsl:value-of select="title"/></th>
		      <xsl:choose>

		        <xsl:when test="price &gt; 500">
		          <td style="background-color:#ccc;">
		          	<xsl:value-of select="price"/></td>
		        </xsl:when>

		        <xsl:otherwise>
		          <td><xsl:value-of select="price"/></td>
		        </xsl:otherwise>

		      </xsl:choose>			
		</tr>
		</xsl:for-each>
		<xsl:for-each select="tvs">
		<tr>
			<th><xsl:value-of select="title"/></th>
		      <xsl:choose>
		        <xsl:when test="year = 2016 ">
		          <td style="background-color:#FF9900;">
		          	<xsl:value-of select="price"/></td>
		        </xsl:when>
		        <xsl:otherwise>
		          <td><xsl:value-of select="price"/></td>
		        </xsl:otherwise>

		      </xsl:choose>			
		</tr>
		</xsl:for-each>
	</table>
</div>
	



</div>
<div id="footer">
©Copyright Ayo Hardware store 2017
</div>	
</body>
</HTML>
</xsl:template>
</xsl:stylesheet>