			function stategametitle(currentstep) { 
				var stepstitle = new Array("Насрочване на избори и определяне на изборните райони", 
					"Съставяне на избирателните списъци", 
					"step 3",
					"step 4",
					"step 5",
					"step 6",
					"step 7"); 
				return (stepstitle[currentstep]);
				
			} 
			function stategamedescription(currentstep) { 
				var stepsdescription = new Array("Всички избори започват с тяхното насрочване – от Президента с указ или от Парламента с решение. ", 
					"След насрочването на изборите, трябва да се съставят списъците с избирателите, които трябва да са точни и актуални", 
					"step 3",
					"step 4",
					"step 5",
					"step 6",
					"step 7"); 
				return (stepsdescription[currentstep]);
				
			} 
			function stategamechall(currentstep,currentchallenge) { 
				var challenges = new Array(
					["предизвикателство 1 стъпка 1","предизвикателство 2 стъпка 1","предизвикателство 3 стъпка 1"],
					["предизвикателство 1 стъпка 2","предизвикателство 2 стъпка 2","предизвикателство 3 стъпка 2"],
					["предизвикателство 1 стъпка 3","предизвикателство 2 стъпка 3","предизвикателство 3 стъпка 3"],
					["предизвикателство 1 стъпка 4","предизвикателство 2 стъпка 4","предизвикателство 3 стъпка 4"],
					["предизвикателство 1 стъпка 5","предизвикателство 2 стъпка 5","предизвикателство 3 стъпка 5"],
					["предизвикателство 1 стъпка 6","предизвикателство 2 стъпка 6","предизвикателство 3 стъпка 6"],
					["предизвикателство 1 стъпка 7","предизвикателство 2 стъпка 7","предизвикателство 3 стъпка 7"]); 
				return (challenges[currentstep][currentchallenge]);
				
			}
			