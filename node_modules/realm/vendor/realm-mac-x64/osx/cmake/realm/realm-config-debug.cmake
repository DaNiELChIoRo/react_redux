#----------------------------------------------------------------
# Generated CMake target import file for configuration "Debug".
#----------------------------------------------------------------

# Commands may need to know the format version.
set(CMAKE_IMPORT_FILE_VERSION 1)

# Import target "Realm::Core" for configuration "Debug"
set_property(TARGET Realm::Core APPEND PROPERTY IMPORTED_CONFIGURATIONS DEBUG)
set_target_properties(Realm::Core PROPERTIES
  IMPORTED_LINK_INTERFACE_LANGUAGES_DEBUG "CXX"
  IMPORTED_LOCATION_DEBUG "${_IMPORT_PREFIX}/lib/librealm-dbg.a"
  )

list(APPEND _IMPORT_CHECK_TARGETS Realm::Core )
list(APPEND _IMPORT_CHECK_FILES_FOR_Realm::Core "${_IMPORT_PREFIX}/lib/librealm-dbg.a" )

# Import target "Realm::QueryParser" for configuration "Debug"
set_property(TARGET Realm::QueryParser APPEND PROPERTY IMPORTED_CONFIGURATIONS DEBUG)
set_target_properties(Realm::QueryParser PROPERTIES
  IMPORTED_LINK_INTERFACE_LANGUAGES_DEBUG "CXX"
  IMPORTED_LOCATION_DEBUG "${_IMPORT_PREFIX}/lib/librealm-parser-dbg.a"
  )

list(APPEND _IMPORT_CHECK_TARGETS Realm::QueryParser )
list(APPEND _IMPORT_CHECK_FILES_FOR_Realm::QueryParser "${_IMPORT_PREFIX}/lib/librealm-parser-dbg.a" )

# Commands beyond this point should not need to know the version.
set(CMAKE_IMPORT_FILE_VERSION)
