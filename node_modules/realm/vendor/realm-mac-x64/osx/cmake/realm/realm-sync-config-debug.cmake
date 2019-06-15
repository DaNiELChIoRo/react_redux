#----------------------------------------------------------------
# Generated CMake target import file for configuration "Debug".
#----------------------------------------------------------------

# Commands may need to know the format version.
set(CMAKE_IMPORT_FILE_VERSION 1)

# Import target "Sync" for configuration "Debug"
set_property(TARGET Sync APPEND PROPERTY IMPORTED_CONFIGURATIONS DEBUG)
set_target_properties(Sync PROPERTIES
  IMPORTED_LINK_INTERFACE_LANGUAGES_DEBUG "CXX"
  IMPORTED_LOCATION_DEBUG "${_IMPORT_PREFIX}/lib/librealm-sync-dbg.a"
  )

list(APPEND _IMPORT_CHECK_TARGETS Sync )
list(APPEND _IMPORT_CHECK_FILES_FOR_Sync "${_IMPORT_PREFIX}/lib/librealm-sync-dbg.a" )

# Import target "SyncServer" for configuration "Debug"
set_property(TARGET SyncServer APPEND PROPERTY IMPORTED_CONFIGURATIONS DEBUG)
set_target_properties(SyncServer PROPERTIES
  IMPORTED_LINK_INTERFACE_LANGUAGES_DEBUG "CXX"
  IMPORTED_LOCATION_DEBUG "${_IMPORT_PREFIX}/lib/librealm-server-dbg.a"
  )

list(APPEND _IMPORT_CHECK_TARGETS SyncServer )
list(APPEND _IMPORT_CHECK_FILES_FOR_SyncServer "${_IMPORT_PREFIX}/lib/librealm-server-dbg.a" )

# Commands beyond this point should not need to know the version.
set(CMAKE_IMPORT_FILE_VERSION)
