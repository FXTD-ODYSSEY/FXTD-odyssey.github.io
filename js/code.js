
const hljs = require("highlight.js/lib/core");  // require only the core library
// separately require languages
hljs.registerLanguage('vex',
  (hljs) => {
    return {
      name: 'VEX',
      keywords: {
        keyword:
          'break continue do else for foreach forpoints function gather if illuminance return while ' +
          '#define #else #endif #ifndef #ifdef #if #include #pragma #undef ' +
          'const export ',
        type:
          'bsdf char color float int integer matrix matrix2 matrix3 matrix4 normal point string ' +
          'struct typedef union vector vector2 vector4 void ',
        built_in:
          // Constants
          "LN10 LN2 LOG10E LOG2E PI PI_2 PI_4 SQRT1_2 SQRT2 TOLERANCE " +
          // Functions
          "chop cop2 cvex displace fog image3d light pop shadow sop surface " +
          "Du Dv Dw __uniform_mul __uniform_premul abs abspath accessframe acos " +
          "addattribute adddetailattrib addgroup addpoint addpointattrib addprim " +
          "addprimattrib addvariablename addvertex addvertexattrib addvisualizer " +
          "agentaddclip agentchannelnames agentchannelvalue agentchannelvalues " +
          "agentclipcatalog agentclipchannel agentclipchannelnames agentcliplength " +
          "agentclipnames agentclipsample agentclipsamplelocal agentclipsamplerate " +
          "agentclipsampleworld agentclipstarttime agentcliptimes " +
          "agentcliptransformgroups agentclipweights agentcollisionlayer " +
          "agentcurrentlayer agentfindtransformgroup agentlayerbindings agentlayers " +
          "agentlayershapes agentlocaltransform agentlocaltransforms agentrigchildren " +
          "agentrigfind agentrigfindchannel agentrigparent agentsolvefbik " +
          "agenttransformcount agenttransformgroupmember addattrib " +
          "agenttransformgroupmemberchannel agenttransformgroups " +
          "agenttransformgroupweight agenttransformnames agenttransformtolocal " +
          "agenttransformtoworld agentworldtransform agentworldtransforms albedo " +
          "alphaname ambient anoise append area argsort array ashikhmin asin " +
          "assert_enabled assign atan atan2 atof atoi atten attrib attribclass " +
          "attribdataid attribsize attribtype attribtypeinfo avg binput blackbody blinn " +
          "blinnBRDF bouncelabel bouncemask bumpmap bumpmapA bumpmapB bumpmapG bumpmapL " +
          "bumpmapR bumpname cbrt ceil ch ch2 ch3 ch4 chadd chattr chattrnames chend " +
          "chendf chendt chexpr chexprf chexprt chf chi chid chindex chinput " +
          "chinputlimits chname chnames chnumchan chop choplocal choplocalt chopt chp " +
          "chr chramp chrampderiv chrate chreadbuf chremove chremoveattr chrename " +
          "chresizebuf chs chsetattr chsetlength chsetrate chsetstart chsop chsraw " +
          "chstart chstartf chstartt chu chv chwritebuf cinput ckspline clamp clip " +
          "colormap colorname combinelocaltransform computenormal concat cone cos cosh " +
          "cracktransform create_cdf create_pdf cregioncapturetransform " +
          "cregiondeformtransform cregionoverridetransform cross cspline ctransform " +
          "curlnoise curlnoise2d curlxnoise curlxnoise2d cvex_bsdf cwnoise decode " +
          "decodeattrib decodeparm degrees depthmap depthname detail detailattrib " +
          "detailattribsize detailattribtype detailattribtypeinfo detailintrinsic " +
          "determinant diagonalizesymmetric diffuse diffuseBRDF dihedral dimport " +
          "distance distance2 dot dsmpixel efit eigenvalues encode encodeattrib " +
          "encodeparm endswith environment erf erf_inv erfc error eulertoquaternion " +
          "eval_bsdf exp expand_udim expandedgegroup expandpointgroup expandprimgroup " +
          "expandvertexgroup extractlocaltransform fastshadow filamentsample file_stat " +
          "filtershadow filterstep find findattribval findattribvalcount finput fit " +
          "fit01 fit10 fit11 floor flownoise flowpnoise frac fresnel fromNDC frontface " +
          "fuzzify fuzzy_and fuzzy_defuzz_centroid fuzzy_nand fuzzy_nor fuzzy_not " +
          "fuzzy_nxor fuzzy_or fuzzy_xor geoself geounwrap getattrib getattribute " +
          "getbbox getbbox_center getbbox_max getbbox_min getbbox_size getblurP " +
          "getbounces getbounds getcomp getcomponents getderiv getfogname " +
          "getglobalraylevel getgroupid getlight getlightid getlightname getlights " +
          "getlightscope getlocalcurvature getmaterial getmaterialid getobjectid " +
          "getobjectname getpackedtransform getphotonlight getpointbbox " +
          "getpointbbox_center getpointbbox_max getpointbbox_min getpointbbox_size " +
          "getprimid getptextureid getraylevel getrayweight getsamplestore getscope " +
          "getsmoothP getspace getuvtangents ggx gradient hair has_udim hasattrib " +
          "hasdetailattrib haslight hasmetadata hasplane haspointattrib hasprimattrib " +
          "hasvertexattrib hedge_dstpoint hedge_dstvertex hedge_equivcount hedge_isequiv " +
          "hedge_isprimary hedge_isvalid hedge_next hedge_nextequiv hedge_postdstpoint " +
          "hedge_postdstvertex hedge_presrcpoint hedge_presrcvertex hedge_prev " +
          "hedge_prim hedge_primary hedge_srcpoint hedge_srcvertex henyeygreenstein " +
          "hscript_noise hscript_rand hscript_snoise hscript_sturb hscript_turb hsvtorgb " +
          "iaspect ichname ident idtopoint idtoprim iend iendtime ihasplane import " +
          "inedgegroup ingroup inpointgroup inprimgroup insert instance interpolate " +
          "intersect intersect_all intersect_lights inumplanes invert invertexgroup " +
          "iplaneindex iplanename iplanesize irate irradiance isalpha isbound " +
          "isconnected isdigit isfinite isfogray isframes islpeactive isnan isotropic " +
          "israytracing issamples isseconds isshadowray istart istarttime isuvrendering " +
          "isvalidindex isvarying itoa ixres iyres join kspline len length length2 lerp " +
          "lightbounces lightid lightstate limit_sample_space limport lkspline log log10 " +
          "lookat lspline lstrip luminance lumname makebasis maketransform mask_bsdf " +
          "maskname match matchvex_blinn matchvex_specular mattrib max mdensity metadata " +
          "metaimport metamarch metanext metastart metaweight min minpos mspace mwnoise " +
          "nametopoint nametoprim nbouncetypes nearpoint nearpoints nedgesgroup " +
          "neighbour neighbourcount neighbours newgroup newsampler nextsample ninput " +
          "ninputs noise noised normal_bsdf normalize normalname npoints npointsgroup " +
          "nprimitives nprimitivesgroup nrandom ntransform nuniqueval nvertices " +
          "nverticesgroup objectstate occlusion ocean_sample ocio_activedisplays " +
          "ocio_activeviews ocio_import ocio_roles ocio_spaces ocio_transform onoise " +
          "opdigits opend opfullpath opid opparentbonetransform opparenttransform " +
          "opparmtransform oppreconstrainttransform oppreparmtransform " +
          "opprerawparmtransform oppretransform oprawparmtransform opstart optransform " +
          "ord orthographic osd_facecount osd_firstpatch osd_limitsurface " +
          "osd_limitsurfacevertex osd_lookupface osd_lookuppatch osd_patchcount " +
          "osd_patches outerproduct ow_nspace ow_space ow_vspace pack_inttosafefloat " +
          "packedtransform pathtrace pcclose pccone pccone_radius pcconvex pcexport " +
          "pcfarthest pcfilter pcfind pcfind_radius pcgenerate pcimport pcimportbyidx3 " +
          "pcimportbyidx4 pcimportbyidxf pcimportbyidxi pcimportbyidxp pcimportbyidxs " +
          "pcimportbyidxv pciterate pcline pcline_radius pcnumfound pcopen pcopenlod " +
          "pcsampleleaf pcsegment pcsegment_radius pcsize pcunshaded pcwrite perspective " +
          "pgfind phong phongBRDF phonglobe photonmap planeindex planename " +
          "planepointdistance planesize planesphereintersect pluralize pnoise point " +
          "pointattrib pointattribsize pointattribtype pointattribtypeinfo pointedge " +
          "pointhedge pointhedgenext pointname pointprims pointvertex pointvertices " +
          "polardecomp polyneighbours pop pow predicate_incircle predicate_insphere " +
          "predicate_orient2d predicate_orient3d premul prerotate prescale pretranslate " +
          "prim prim_attribute prim_normal primarclen primattrib primattribsize " +
          "primattribtype primattribtypeinfo primduv primfind primhedge primintrinsic " +
          "primpoint primpoints primuv primuvconvert primvertex primvertexcount " +
          "primvertices print_once printf product ptexture ptlined ptransform push " +
          "pxnoise pxnoised qconvert qdistance qinvert qmultiply qrotate quaternion " +
          "quaterniontoeuler radians rand random random_fhash random_ihash " +
          "random_poisson random_shash random_sobol rawbumpmap rawbumpmapA rawbumpmapB " +
          "rawbumpmapG rawbumpmapL rawbumpmapR rawcolormap rayhittest rayimport re_find " +
          "re_findall re_match re_replace re_split reflect reflectlight refract " +
          "refractlight relativepath relbbox relpath relpointbbox removegroup " +
          "removeindex removepoint removeprim removevalue removevertex renderstate " +
          "reorder resample_linear resize resolvemissedray reverse rgbtohsv rgbtoxyz " +
          "rint rotate rotate_x_to rstrip sample_bsdf sample_cauchy sample_cdf " +
          "sample_circle_arc sample_circle_edge_uniform sample_circle_ring_uniform " +
          "sample_circle_slice sample_circle_uniform sample_direction_cone " +
          "sample_direction_uniform sample_discrete sample_exponential sample_geometry " +
          "sample_hemisphere sample_hypersphere_cone sample_hypersphere_uniform " +
          "sample_light sample_lognormal sample_lognormal_by_median sample_normal " +
          "sample_orientation_cone sample_orientation_uniform sample_photon " +
          "sample_sphere_cone sample_sphere_shell_uniform sample_sphere_uniform " +
          "sampledisk scale scatter select sensor_panorama_create " +
          "sensor_panorama_getcolor sensor_panorama_getcone sensor_panorama_getdepth " +
          "sensor_save serialize set setagentchannelvalue setagentchannelvalues " +
          "setagentclipnames setagentclips setagentcliptimes setagentclipweights " +
          "setagentcollisionlayer setagentcurrentlayer setagentlocaltransform " +
          "setagentlocaltransforms setagentworldtransform setagentworldtransforms " +
          "setattrib setattribtypeinfo setcomp setcurrentlight setdetailattrib " +
          "setdetailintrinsic setedgegroup setpackedtransform setpointattrib " +
          "setpointgroup setprimattrib setprimgroup setprimintrinsic setprimvertex " +
          "setsamplestore setvertexattrib setvertexgroup setvertexpoint shadow " +
          "shadow_light shadowmap shimport shl shr shrz sign simport sin sinh sleep " +
          "slerp slice slideframe smooth smoothrotation snoise solid_angle " +
          "solveconstraint solvecubic solvecurve solvefbik solveik solvepoly " +
          "solvequadratic solvetriangleSSS sort specular specularBRDF spline split " +
          "split_bsdf splitpath sprintf sqrt sssapprox startswith storelightexport strip " +
          "strlen sum surfacedist switch swizzle tan tanh tet_adjacent tet_faceindex " +
          "teximport texprintf texture texture3d texture3dBox titlecase toNDC tolower " +
          "toupper trace translate translucent transpose trunc tw_nspace tw_space " +
          "tw_vspace uniqueval uniquevals unpack_intfromsafefloat unserialize upush " +
          "usd_addattrib usd_addcollectionexclude usd_addcollectioninclude " +
          "usd_addinversetotransformorder usd_addorient usd_addprim usd_addprimvar " +
          "usd_addrelationshiptarget usd_addrotate usd_addscale usd_addtotransformorder " +
          "usd_addtransform usd_addtranslate usd_attrib usd_attribelement usd_attriblen " +
          "usd_attribnames usd_attribsize usd_attribtimesamples usd_attribtypename " +
          "usd_blockattrib usd_blockprimvar usd_blockprimvarindices " +
          "usd_blockrelationship usd_boundmaterialpath usd_clearmetadata " +
          "usd_cleartransformorder usd_collectioncomputedpaths usd_collectioncontains " +
          "usd_collectionexcludes usd_collectionexpansionrule usd_collectionincludes " +
          "usd_drawmode usd_findtransformname usd_flattenedprimvar " +
          "usd_flattenedprimvarelement usd_getbbox usd_getbbox_center usd_getbbox_max " +
          "usd_getbbox_min usd_getbbox_size usd_getbounds usd_getpointinstancebounds " +
          "usd_hasapi usd_haspayload usd_isactive usd_isarray usd_isarraymetadata " +
          "usd_isarrayprimvar usd_isattrib usd_iscollection usd_iscollectionpath " +
          "usd_isindexedprimvar usd_isinstance usd_iskind usd_ismetadata usd_isprim " +
          "usd_isprimvar usd_isrelationship usd_isstage usd_istransformreset usd_istype " +
          "usd_isvisible usd_kind usd_localtransform usd_makeattribpath " +
          "usd_makecollectionpath usd_makepropertypath usd_makerelationshippath " +
          "usd_metadata usd_metadataelement usd_metadatalen usd_metadatanames usd_name " +
          "usd_parentpath usd_pointinstance_getbbox usd_pointinstance_getbbox_center " +
          "usd_pointinstance_getbbox_max usd_pointinstance_getbbox_min " +
          "usd_pointinstance_getbbox_size usd_pointinstance_relbbox " +
          "usd_pointinstancetransform usd_primvar usd_primvarattribname " +
          "usd_primvarelement usd_primvarelementsize usd_primvarindices " +
          "usd_primvarinterpolation usd_primvarlen usd_primvarnames usd_primvarsize " +
          "usd_primvartimesamples usd_primvartypename usd_purpose " +
          "usd_relationshipforwardedtargets usd_relationshipnames " +
          "usd_relationshiptargets usd_relbbox usd_removerelationshiptarget " +
          "usd_setactive usd_setattrib usd_setattribelement usd_setcollectionexcludes " +
          "usd_setcollectionexpansionrule usd_setcollectionincludes usd_setdrawmode " +
          "usd_setkind usd_setmetadata usd_setmetadataelement usd_setprimvar " +
          "usd_setprimvarelement usd_setprimvarelementsize usd_setprimvarindices " +
          "usd_setprimvarinterpolation usd_setpurpose usd_setrelationshiptargets " +
          "usd_settransformorder usd_settransformreset usd_setvariantselection " +
          "usd_setvisible usd_transformname usd_transformorder usd_transformsuffix " +
          "usd_transformtype usd_typename usd_uniquetransformname usd_variants " +
          "usd_variantselection usd_variantsets usd_worldtransform uvdist uvintersect " +
          "uvsample uvunwrap variance velocityname vertex vertexattrib vertexattribsize " +
          "vertexattribtype vertexattribtypeinfo vertexhedge vertexindex vertexnext " +
          "vertexpoint vertexprev vertexprim vertexprimindex vnoise volume " +
          "volumegradient volumeindex volumeindexactive volumeindexorigin " +
          "volumeindextopos volumeindexv volumepostoindex volumeres volumesample " +
          "volumesamplev volumevoxeldiameter vtransform warning wireblinn wirediffuse " +
          "wnoise wo_nspace wo_space wo_vspace writepixel wt_nspace wt_space wt_vspace " +
          "xnoise xnoised xyzdist xyztorgb",
        literal: 'true false'
      },
      illegal: '</',
      contains: [
        hljs.C_LINE_COMMENT_MODE,
        hljs.C_BLOCK_COMMENT_MODE,
        hljs.C_NUMBER_MODE,
        {
          className: 'meta',
          begin: '#', end: '$'
        },
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE,
        { // eats variables
          begin: '[\\$\\%\\@](\\^\\w\\b|#\\w+|[^\\s\\w{]|{\\w+}|\\w+)'
        },
      ]
    };
  });
