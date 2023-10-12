/* // Crear una tabla de excel que tenga columnas con medidas (sacarlas de la columna ”nombre”) y pegarla acá para poder crear bien los productos
let excelData = `
ROSCADO	50015	 Codo HH a 90º	1/2” 	100	1200	371,46	371,46
ROSCADO	50016	 Codo HH a 90º	3/4” 	50	750	570,60	570,6
ROSCADO	50017	 Codo HH a 90º	1” 	25	300	1.211,89	1211,89
ROSCADO	50018	 Codo HH a 90º	1 1/4” 	10	150	2.271,72	2271,72
ROSCADO	50019	 Codo HH a 90º	1 1/2” 	10	120	3.014,17	3014,17
ROSCADO	50020	 Codo HH a 90º	2” 	5	50	5.220,16	5220,16
ROSCADO	50100	 Codo MH a 90º	1/2” 	50	1200	379,75	379,75
ROSCADO	50101	 Codo MH a 90º	3/4” 	50	750	613,82	613,82
ROSCADO	50102	 Codo MH a 90º	1” 	25	300	1.055,70	1055,7
ROSCADO	50103	 Codo MH a 90º	1 1/4” 	10	200	2.305,13	2305,13
ROSCADO	50104	 Codo MH a 90º	1 1/2” 	10	180	2.878,73	2878,73
ROSCADO	50105	 Codo MH a 90º	2” 	5	50	5.322,49	5322,49
ROSCADO	50270	Codo HH a 45º	1/2”	50	1200	545,21	545,21
ROSCADO	50271	Codo HH a 45º	3/4”	50	750	689,53	689,53
ROSCADO	50272	Codo HH a 45º	1”	25	250	1.202,68	1202,68
ROSCADO	50300	Codo HH a 45º	1 1/4”	10	150	2.068,60	2068,6
ROSCADO	50301	Codo HH a 45º	1 1/2”	10	120	3.122,17	3122,17
ROSCADO	50302	Codo HH a 45º	2”	5	50	6.230,81	6230,81
ROSCADO	50021	Tee	1/2” 	50	750	558,40	558,4
ROSCADO	50022	Tee	3/4” 	25	450	811,39	811,39
ROSCADO	50023	Tee	1” 	25	225	1.774,40	1774,4
ROSCADO	50024	Tee	1 1/4” 	10	120	2.747,43	2747,43
ROSCADO	50025	Tee	1 1/2” 	10	80	3.460,85	3460,85
ROSCADO	50026	Tee	2” 	5	50	6.622,29	6622,29
ROSCADO	50027	UDC	1/2” 	50	800	1.425,37	1.425,37
ROSCADO	50028	UDC	3/4” 	25	500	1.865,63	1.865,63
ROSCADO	50029	UDC	1” 	15	240	3.232,22	3.232,22
ROSCADO	50351	UDC	1 1/4” 	10	120	6.932,20	6.932,20
ROSCADO	50353	UDC	1 1/2” 	10	100	8.750,50	8.750,50
ROSCADO	50355	UDC	2” 	5	50	15.341,88	15.341,88
ROSCADO	50030	Cupla HH	1/2” 	100	1800	287,11	287,11
ROSCADO	50031	Cupla HH	3/4” 	50	1000	418,70	418,7
ROSCADO	50032	Cupla HH	1” 	25	500	782,93	782,93
ROSCADO	50033	Cupla HH	1 1/4” 	20	400	1.330,64	1330,64
ROSCADO	50034	Cupla HH	1 1/2” 	20	260	1.623,61	1623,61
ROSCADO	50132	Cupla HH	2” 	10	140	3.061,86	3061,86
ROSCADO	50273	Cupla MH	 1/2” 	50	1500	526,27	526,27
ROSCADO	50274	Cupla MH	 3/4” 	50	1000	683,26	683,26
ROSCADO	50250	Curva HH	1/2” 	50	750	1.389,07	1389,07
ROSCADO	50251	Curva HH	3/4” 	25	450	1.703,56	1703,56
ROSCADO	50252	Curva HH	1” 	25	250	2.760,00	2760
ROSCADO	50361	Curva HH	1 1/4” 	10	120	8.260,44	8260,44
ROSCADO	50362	Curva HH	1 1/2” 	10	80	12.033,61	12033,61
ROSCADO	50363	Curva HH	2” 	5	45	23.455,93	23455,93
ROSCADO	50253	Curva MH	1/2” 	50	750	1.535,22	1535,22
ROSCADO	50254	Curva MH	3/4” 	25	450	1.884,97	1884,97
ROSCADO	50255	Curva MH	1” 	25	250	2.930,00	2930
ROSCADO	50364	Curva MH	1 1/4” 	10	120	10.039,72	10039,72
ROSCADO	50365	Curva MH	1 1/2” 	10	80	14.625,58	14625,58
ROSCADO	50366	Curva MH	2” 	5	45	22.790,12	22790,12
ROSCADO	50035	RCT	1/2” 	100	2500	187,45	187,45
ROSCADO	50036	RCT	3/4” 	100	1500	275,32	275,32
ROSCADO	50037	RCT	1” 	50	850	444,73	444,73
ROSCADO	50038	RCT	1 1/4” 	20	400	790,81	790,81
ROSCADO	50039	RCT	1 1/2” 	20	300	996,07	996,07
ROSCADO	50040	RCT	2”	10	200	1.669,86	1669,86
ROSCADO	50041	TAPON	1/2” 	100	4000	137,14	137,14
ROSCADO	50042	TAPON	3/4” 	100	2500	227,04	227,04
ROSCADO	50043	TAPON	1” 	100	1300	341,15	341,15
ROSCADO	50044	TAPON	1 1/4” 	20	800	520,21	520,21
ROSCADO	50045	TAPON	1 1/2” 	20	500	629,72	629,72
ROSCADO	50046	TAPON	2”	10	350	1.122,89	1122,89
ROSCADO	50260	TAPA	1/2” 	100	4000	236,01	236,01
ROSCADO	50261	TAPA	3/4” 	100	2000	403,93	403,93
ROSCADO	50262	TAPA	1” 	100	1000	640,39	640,39
ROSCADO	50263	TAPA	1 1/4” 	20	400	1.419,09	1419,09
ROSCADO	50264	TAPA	1 1/2” 	20	400	1.929,91	1929,91
ROSCADO	50265	TAPA	2”	10	250	2.846,79	2846,79
ROSCADO	50275	Curva Sobre Paso	1/2	10	200	0	0
ROSCADO	50276	Curva Sobre Paso	3/4	10	200	0	0
ROSCADO	50047	AD TQUE	1/2” 	25	250	3.020,79	3020,79
ROSCADO	50048	AD TQUE	3/4” 	25	250	3.255,76	3255,76
ROSCADO	50049	AD TQUE	1” 	20	140	3.972,36	3972,36
ROSCADO	50050	AD TQUE	1 1/4” 	10	100	5.296,16	5296,16
ROSCADO	50051	AD TQUE	1 1/2” 	10	80	6.234,83	6234,83
ROSCADO	50052	AD TQUE	2”	5	60	7.625,74	7625,74
ROSCADO	50200	BRIDA	1/2”	100	1000	819,76	819,76
ROSCADO	50201	BRIDA	3/4”	100	800	869,42	869,42
ROSCADO	50202	BRIDA	1”	50	500	1.137,24	1137,24
ROSCADO	50203	BRIDA	1 1/4”	50	400	1.327,73	1327,73
ROSCADO	50204	BRIDA	1 1/2”	50	400	1.579,45	1579,45
ROSCADO	50205	BRIDA	2”	25	250	1.752,61	1752,61
ROSCADO	50206	JUNTA PVC	1/2”	100	3500	588,86	588,86
ROSCADO	50207	JUNTA PVC	3/4”	100	3500	623,45	623,45
ROSCADO	50208	JUNTA PVC	1”	50	3500	802,43	802,43
ROSCADO	50209	JUNTA PVC	1 1/4”	50	2400	946,75	946,75
ROSCADO	50210	JUNTA PVC	1 1/2”	50	2000	1.131,49	1131,49
ROSCADO	50211	JUNTA PVC	2”	25	1200	1.235,39	1235,39
ROSCADO	50072	ACOPLE STD	1/2” LARGO	30	300	2.667,74	2667,74
ROSCADO	50073	ACOPLE STD	3/4”  LARGO	20	240	3.220,20	3220,2
ROSCADO	50074	ACOPLE STD	1”  LARGO	10	150	4.621,51	4621,51
ROSCADO	50130	ACOPLE STD	GRIS 1/2” 	30	300	2.193,72	2193,72
ROSCADO	50131	ACOPLE STD	GRIS 3/4” 	20	240	2.733,89	2733,89
ROSCADO	50133	ACOPLE STD	GRIS 1” 	10	150	4.299,31	4299,31
ROSCADO	50135	ACOPLE PROFESIONAL	1/2” 	30	300	2.675,05	2675,05
ROSCADO	50136	ACOPLE PROFESIONAL	3/4” 	20	240	3.084,61	3084,61
ROSCADO	50053	CRUZ	1/2” 	50	400	1.265,91	1265,91
ROSCADO	50054	CRUZ	3/4” 	25	300	1.884,45	1884,45
ROSCADO	50055	CRUZ	1” 	25	200	2.383,88	2383,88
ROSCADO	50065	CODO	90º 3/4” x 1/2” 	50	750	633,92	633,92
ROSCADO	50358	CODO	90º 1” x 1/2” 	25	400	1.772,91	1772,91
ROSCADO	50360	CODO	90º 1” x 3/4” 	25	400	1.772,91	1772,91
ROSCADO	50066	CUPLA	1/2” x 3/8” 	100	1500	325,43	325,43
ROSCADO	50350	CUPLA	3/4” x 1/2” 	50	1000	549,79	549,79
ROSCADO	50352	CUPLA	1” x 1/2” 	25	500	836,12	836,12
ROSCADO	50067	CUPLA	1” x 3/4” 	25	500	783,16	783,16
ROSCADO	50071	TEE	3/4” x 1/2” 	25	450	786,83	786,83
ROSCADO	50354	TEE	1” x 1/2” 	25	250	1.385,56	1385,56
ROSCADO	50356	TEE	1” x 3/4” 	25	250	1.384,33	1384,33
ROSCADO	50280	RCT	3/4 x 1/2	100	1500	342,63	342,63
ROSCADO	50281	RCT	1 x 1/2	50	1000	504,48	504,48
ROSCADO	50282	RCT	1 x 3/4	50	1000	483,85	483,85
ROSCADO	50134	BUJE	1/2” x 3/8” 	100	3500	251,98	251,98
ROSCADO	50068	BUJE	3/4” x 1/2” 	100	2500	227,92	227,92
ROSCADO	50069	BUJE	1” x 1/2 	100	1300	402,19	402,19
ROSCADO	50070	BUJE	1” x 3/4” 	100	1800	319,74	319,74
ROSCADO	50075	BUJE	1 1/4” x 1/2” 	20	600	960,52	960,52
ROSCADO	50076	BUJE	1 1/4” x 3/4” 	20	600	898,52	898,52
ROSCADO	50077	BUJE	1 1/4” x 1” 	20	600	620,22	620,22
ROSCADO	50084	BUJE	1 1/2” x 1/2” 	20	600	1.083,96	1083,96
ROSCADO	50078	BUJE	1 1/2” x 3/4” 	20	600	1.004,36	1004,36
ROSCADO	50079	BUJE	1 1/2” x 1” 	20	600	876,34	876,34
ROSCADO	50080	BUJE	1 1/2” x 1 1/4” 	20	600	856,23	856,23
ROSCADO	50085	BUJE	2” x 1/2” 	10	300	1.848,76	1848,76
ROSCADO	50086	BUJE	2” x 3/4” 	10	300	1.685,69	1685,69
ROSCADO	50081	BUJE	2” x 1” 	10	300	1.768,39	1768,39
ROSCADO	50082	BUJE	2” x 1 1/4” 	10	300	1.446,90	1446,9
ROSCADO	50083	BUJE	2” x 1 1/2” 	10	300	1.282,73	1282,73
ROSCADO	52006	Niple	1/2” x 6cm 	100	1800	335,75	335,75
ROSCADO	52106	Niple	3/4” x 6cm 	50	1000	423,34	423,34
ROSCADO	52206	Niple	1” x 6cm 	25	500	753,55	753,55
ROSCADO	52008	Niple	1/2” x 8cm 	50	1200	453,38	453,38
ROSCADO	52108	Niple	3/4” x 8cm 	50	800	576,62	576,62
ROSCADO	52208	Niple	1” x 8cm 	25	400	769,26	769,26
ROSCADO	52010	Niple	1/2” x 10cm 	50	1000	519,78	519,78
ROSCADO	52110	Niple	3/4” x 10cm 	25	600	679,69	679,69
ROSCADO	52210	Niple	1” x 10cm 	25	400	830,62	830,62
ROSCADO	52310	Niple	1 1/4” x 10cm 	25	250	1.638,73	1638,73
ROSCADO	52410	Niple	1 1/2” x 10cm 	20	200	1.905,21	1905,21
ROSCADO	52510	Niple	2” x 10cm 	10	150	2.624,03	2624,03
ROSCADO	52012	Niple	1/2” x 12cm 	50	750	608,08	608,08
ROSCADO	52112	Niple	3/4” x 12cm 	50	500	859,33	859,33
ROSCADO	52212	Niple	1” x 12cm 	25	250	1.568,26	1568,26
ROSCADO	52312	Niple	1 1/4” x 12cm 	20	200	1.904,74	1904,74
ROSCADO	52412	Niple	1 1/2” x 12cm 	20	160	2.361,64	2361,64
ROSCADO	52512	Niple	2” x 12cm 	20	140	3.430,47	3430,47
ROSCADO	52015	Niple	1/2” x 15cm 	50	600	752,73	752,73
ROSCADO	52115	Niple	3/4” x 15cm 	50	400	1.019,28	1019,28
ROSCADO	52215	Niple	1” x 15cm 	25	250	1.624,10	1624,1
ROSCADO	52315	Niple	1 1/4” x 15cm 	20	180	2.318,22	2318,22
ROSCADO	52415	Niple	1 1/2” x 15cm 	20	120	2.690,70	2690,7
ROSCADO	52515	Niple	2” x 15cm 	10	100	3.841,77	3841,77
ROSCADO	52020	Niple	1/2” x 20cm 	50	500	1.176,28	1176,28
ROSCADO	52120	Niple	3/4” x 20cm 	50	350	1.475,29	1475,29
ROSCADO	52220	Niple	1” x 20cm 	25	250	1.839,77	1839,77
ROSCADO	52320	Niple	1 1/4” x 20cm 	20	140	3.247,35	3247,35
ROSCADO	52420	Niple	1 1/2” x 20cm 	10	100	3.803,88	3803,88
ROSCADO	52520	Niple	2” x 20cm 	10	60	5.272,29	5272,29
ROSCADO	52025	Niple	1/2” x 25cm 	20	400	1.363,81	1363,81
ROSCADO	52125	Niple	3/4” x 25cm 	20	300	1.779,96	1779,96
ROSCADO	52225	Niple	1” x 25cm 	15	200	2.373,28	2373,28
ROSCADO	50110	Flexible Gris	1/2 X 30cm	25	250	2.845,64	2845,64
ROSCADO	50111	Flexible Gris	1/2 X 40cm	25	250	3.314,65	3314,65
ROSCADO	50112	Flexible Gris	1/2 X 50cm	25	250	3.725,68	3725,68
ESPIGA	40000	E. DOBLE	1/2” 	100	3000	165,05	165,05
ESPIGA	40001	E. DOBLE	3/4” 	50	1200	231,52	231,52
ESPIGA	40002	E. DOBLE	1” 	50	700	312,05	312,05
ESPIGA	40003	E. DOBLE	1 1/4”	20	400	653,39	653,39
ESPIGA	40004	E. DOBLE	1 1/2”	20	340	798,68	798,68
ESPIGA	40005	E. DOBLE	2” 	10	160	1.288,22	1288,22
ESPIGA	40006	E. DOBLE	2 1/2” 	5	80	3.867,25	3867,25
ESPIGA	40007	E.R.M.	1/2” 	100	2500	169,47	169,47
ESPIGA	40008	E.R.M.	3/4” 	50	1500	286,12	286,12
ESPIGA	40009	E.R.M.	1” 	50	600	411,75	411,75
ESPIGA	40010	E.R.M.	1 1/4” 	20	400	779,48	779,48
ESPIGA	40011	E.R.M.	1 1/2” 	20	260	970,68	970,68
ESPIGA	40012	E.R.M.	2” 	10	150	1.463,97	1463,97
ESPIGA	40013	E.R.M.	2 1/2” 	5	80	4.167,27	4167,27
ESPIGA	40014	E.R.H.	1/2” 	100	1800	280,11	280,11
ESPIGA	40015	E.R.H.	3/4” 	50	750	374,64	374,64
ESPIGA	40016	E.R.H.	1” 	50	650	565,73	565,73
ESPIGA	40017	E.R.H.	1 1/4” 	20	300	1.224,85	1224,85
ESPIGA	40018	E.R.H.	1 1/2” 	20	180	1.402,48	1402,48
ESPIGA	40019	E.R.H.	2” 	10	120	2.041,90	2041,9
ESPIGA	40032	C.E.DOBLE	1/2” 	100	2000	293,36	293,36
ESPIGA	40033	C.E.DOBLE	3/4” 	50	900	370,95	370,95
ESPIGA	40034	C.E.DOBLE	1” 	50	500	520,00	520
ESPIGA	40035	C.E.DOBLE	1 1/4” 	20	340	933,50	933,5
ESPIGA	40036	C.E.DOBLE	1 1/2” 	20	200	1.266,82	1266,82
ESPIGA	40037	C.E.DOBLE	2” 	10	100	1.979,11	1979,11
ESPIGA	40038	Codo.E.R.H.	1/2” 	100	1500	361,06	361,06
ESPIGA	40039	Codo.E.R.H.	3/4” 	50	750	499,18	499,18
ESPIGA	40040	Codo.E.R.H.	1” 	25	400	800,10	800,1
ESPIGA	40041	Codo.E.R.H.	1 1/4” 	20	220	1.440,95	1440,95
ESPIGA	40042	Codo.E.R.H.	1 1/2” 	20	160	2.071,90	2071,9
ESPIGA	40043	Codo.E.R.H.	2” 	10	80	3.212,44	3212,44
ESPIGA	40100	Codo.E.R.M.	1/2” 	100	2500	342,70	342,7
ESPIGA	40044	E. Doble red	3/4” X 1/2”	50	1500	238,66	238,66
ESPIGA	40045	E. Doble red	1” X 3/4”	50	1000	352,85	352,85
ESPIGA	40046	E. Doble red	1” X 1/2	50	1000	352,85	352,85
ESPIGA	40020	Tee Triple	1/2” 	100	1200	466,72	466,72
ESPIGA	40021	Tee Triple	3/4” 	50	600	630,05	630,05
ESPIGA	40022	Tee Triple	1” 	25	300	784,07	784,07
ESPIGA	40023	Tee Triple	1 1/4” 	20	220	1.333,55	1333,55
ESPIGA	40024	Tee Triple	1 1/2” 	20	200	1.680,32	1680,32
ESPIGA	40025	Tee Triple	2” 	10	70	2.800,42	2800,42
ESPIGA	40026	Tee R.H.	1/2” 	100	1200	586,66	586,66
ESPIGA	40027	Tee R.H.	3/4” 	50	600	706,80	706,8
ESPIGA	40028	Tee R.H.	1” 	25	300	1.118,49	1118,49
ESPIGA	40029	Tee R.H.	1 1/4” 	20	200	1.610,29	1610,29
ESPIGA	40030	Tee R.H.	1 1/2” 	15	120	2.142,32	2142,32
ESPIGA	40031	Tee R.H.	2” 	10	70	3.432,41	3432,41
ESPIGA	40047	E. R.M. Red	3/4” X 1/2”	50	1500	300,02	300,02
ESPIGA	40048	E. R.M. Red	1” X  3/4”	50	750	433,42	433,42
KRONA	0551	Val. Esferica	1/2”	6	390	2.660,77	2.660,77
KRONA	0552	Val. Esferica	3/4”	6	330	3.507,51	3.507,51
KRONA	0553	Val. Esferica	1”	2	160	5.665,20	5.665,20
KRONA	0554	Val. Esferica	1 1/4”	3	75	11.571,30	11.571,30
KRONA	0555	Val. Esferica	1 1/2”	3	60	15.230,55	15.230,55
KRONA	0556	Val. Esferica	2”	2	38	18.922,83	18.922,83
KRONA	0557	Val. Esferica	2 1/2”	1	20	44.571,58	44.571,58
KRONA	0558	Val. Esferica	3”	1	10	80.228,79	80.228,79
KRONA	0559	Val. Esferica	4”	1	10	146.640,32	146.640,32
KRONA	0960	Val. Retención c/canasto	3/4”	6	300	3.860,94	3.860,94
KRONA	0961	Val. Retención c/canasto	1”	6	210	5.258,23	5.258,23
KRONA	0962	Val. Retención c/canasto	1 1/2”	3	96	10.483,30	10.483,30
KRONA	0963	Val. Retención c/canasto	2”	2	60	16.601,40	16.601,40
KRONA	0668	Val. Antirretorno con adap.	110 MM	1	12	69.034,76	69.034,76
KRONA	0781	Canilla Jardín	1/2”- 3/4” PVC	6	168	3.652,14	3.652,14
KRONA	0570	Val. Esf. Media Union	1/2”	10	240	8.019,06	8.019,06
KRONA	0571	Val. Esf. Media Union	3/4”	10	150	11.010,27	11.010,27
KRONA	0572	Val. Esf. Media Union	1”	5	100	14.235,12	14.235,12
KRONA	0573	Val. Esf. Media Union	1 1/4”	5	75	19.071,45	19.071,45
KRONA	0574	Val. Esf. Media Union	1 1/2”	2	40	28.460,95	28.460,95
KRONA	0575	Val. Esf. Media Union	2”	2	20	51.728,02	51.728,02
KRONA	0564	Val. Esf. Media Union	40 MM	5	70	21.022,86	21.022,86
KRONA	0565	Val. Esf. Media Union	50 MM	2	40	26.518,86	26.518,86
KRONA	0330	Adaptador Soldable RM	20 x 1/2”	50	2000	358,94	358,94
KRONA	0331	Adaptador Soldable RM	25 x 3/4”	50	1200	510,60	510,60
KRONA	0332	Adaptador Soldable RM	32 x 1”	25	800	992,12	992,12
KRONA	0333	Adaptador Soldable RM	40 x 1 1/4”	10	500	1.662,98	1.662,98
KRONA	0336	Adaptador Soldable RM	50 x 1 1/2”	25	350	2.451,22	2.451,22
KRONA	0360	Buje Corto soldable	25 x 20 MM	50	4000	179,42	179,42
KRONA	0361	Buje Corto soldable	32 x 25 MM	50	2000	525,13	525,13
KRONA	0362	Buje Corto soldable	40 x 32 MM	10	1000	729,37	729,37
KRONA	0363	Buje Corto soldable	50 x 40 MM	10	650	1.444,56	1.444,56
KRONA	0406	Curva soldable a 90°	20 MM	20	800	1.111,13	1.111,13
KRONA	0407	Curva soldable a 90°	25 MM	20	500	1.592,63	1.592,63
KRONA	0408	Curva soldable a 90°	32 MM	10	300	3.473,23	3.473,23
KRONA	0409	Curva soldable a 90°	40 MM	10	150	6.565,77	6.565,77
KRONA	0410	Curva soldable a 90°	50 MM	10	80	8.974,43	8.974,43
KRONA	0415	Codo Soldable a 45°	20 MM	50	1400	595,50	595,50
KRONA	0416	Codo Soldable a 45°	25 MM	50	1000	779,08	779,08
KRONA	0417	Codo Soldable a 45°	32 MM	10	600	1.349,39	1.349,39
KRONA	0418	Codo Soldable a 45°	40 MM	10	300	2.859,69	2.859,69
KRONA	0419	Codo Soldable a 45°	50 MM	10	200	3.633,03	3.633,03
KRONA	0424	Codo Soldable a 90°	20 MM	50	1250	496,06	496,06
KRONA	0425	Codo Soldable a 90°	25 MM	50	750	919,07	919,07
KRONA	0426	Codo Soldable a 90°	32 MM	25	500	1.503,07	1.503,07
KRONA	0427	Codo Soldable a 90°	40 MM	10	300	2.451,22	2.451,22
KRONA	0428	Codo Soldable a 90°	50 MM	25	150	4.231,21	4.231,21
KRONA	0435	Cupla Soldable	20 MM	50	2000	358,84	358,84
KRONA	0436	Cupla Soldable	25 MM	50	1400	540,03	540,03
KRONA	0437	Cupla Soldable	32 MM	25	750	1.079,70	1.079,70
KRONA	0438	Cupla Soldable	40 MM	10	450	1.779,99	1.779,99
KRONA	0439	Cupla Soldable	50 MM	10	200	2.480,29	2.480,29
KRONA	0454	Tee Soldable	20 MM	50	1000	890,00	890,00
KRONA	0455	Tee Soldable	25 MM	50	600	1.269,40	1.269,40
KRONA	0456	Tee Soldable	32 MM	25	350	2.100,89	2.100,89
KRONA	0457	Tee Soldable	40 MM	10	200	3.794,01	3.794,01
KRONA	0458	Tee Soldable	50 MM	10	100	5.719,38	5.719,38
KRONA	0474	Union Doble Soldable	20 MM	20	700	2.904,59	2.904,59
KRONA	0475	Union Doble Soldable	25 MM	20	400	3.458,71	3.458,71
KRONA	0476	Union Doble Soldable	32 MM	10	240	6.268,52	6.268,52
KRONA	0477	Union Doble Soldable	40 MM	10	150	11.619,14	11.619,14
KRONA	0478	Union Doble Soldable	50 MM	10	80	15.671,78	15.671,78
KRONA	0483	Codo a 90° RH Soldable	20 X 1/2”	30	1050	992,12	992,12
KRONA	0484	Codo a 90° RH Soldable	25 X 3/4”	30	600	1.269,40	1.269,40
KRONA	0487	Adaptador Soldable RH	20 x 1/2”	50	1250	609,88	609,88
KRONA	0488	Adaptador Soldable RH	25 x 3/4”	50	800	925,10	925,10
KRONA	0489	Adaptador Soldable RH	25 x 1/2”	50	1000	992,12	992,12
KRONA	0490	Adaptador Soldable RH	32 x 1”	20	500	1.882,11	1.882,11
KRONA	0491	Adaptador Soldable RH	40 x 1 1/4”	15	300	2.232,44	2.232,44
KRONA	0492	Adaptador Soldable RH	50 x 1 1/2”	10	200	4.669,12	4.669,12
KRONA	1324	Montura	50 x 1/2”	10	160	4.961,29	4.961,29
KRONA	1325	Montura	50 x 3/4”	10	160	5.179,71	5.179,71
`;

let rows = excelData.trim().split('\n');

let columns = rows.map((row) => row.split('\t'));

let arraysOfColumns = [];

for (let i = 0; i < columns[0].length; i++) {
  let column = [];

  for (let j = 0; j < columns.length; j++) {
    column.push(columns[j][i]);
  }

  arraysOfColumns.push(column);
}

// console.log(arraysOfColumns[0].length);
// console.log(arraysOfColumns[1].length);
// console.log(arraysOfColumns[2].length);
// console.log(arraysOfColumns[3].length);
// console.log(arraysOfColumns[4].length);
// console.log(arraysOfColumns[5].length);
// console.log(arraysOfColumns[6].length);

// for (let index = 0; index < arraysOfColumns[0].length; index++) {
//   console.log(index);
// }

module.exports = arraysOfColumns;
 */
