//package com.software.softwaresys.repository;
//
//import com.software.softwaresys.model.Program;
//import com.software.softwaresys.model.ProgramDetails;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.CrudRepository;
//import org.springframework.stereotype.Repository;
//
//import java.util.List;
//@Repository
//public interface ProgramDetailsRepo extends CrudRepository<Program, Integer> {
//    @Query("SELECT new com.software.softwaresys.model.ProgramDetails(Categories.categoriesName, Programs.programName, Programs.programDesc, Developer.developerName) " +
//            "FROM Program Programs " +
//            "INNER JOIN Programs.developer Developer " +
//            "INNER JOIN Programs.category Categories " +
//            "GROUP BY Categories.categoriesName, Programs.programName, Programs.programDesc, Developer.developerName")
//    List<ProgramDetails> findProgramDetails();
//}
