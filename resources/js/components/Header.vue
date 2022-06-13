<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
	  <a class="navbar-brand" href="#">Tours</a>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>
	  <div class="collapse navbar-collapse" id="navbarNav">
	    <ul class="navbar-nav">
	        
	        <li class="nav-item">
		      <router-link to="/bookings" class="nav-link" >
					Bookings
			  </router-link>
		    </li>
	        <li class="nav-item">
			  <router-link to="/tours" class="nav-link" >
					Tours
			  </router-link>
		    </li>
	    </ul>
	  </div>
	</nav>
</template>