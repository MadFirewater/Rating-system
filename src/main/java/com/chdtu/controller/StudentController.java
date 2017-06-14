package com.chdtu.controller;

import com.chdtu.domain.Student;
import com.chdtu.repository.StudentRepository;
import com.chdtu.service.XlsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.util.Map;

@Controller
public class StudentController {

    @Autowired
    XlsService xlsService;

    @Autowired
    StudentRepository studentRepository;

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(value = "api/uploadStudents", method = RequestMethod.POST, headers = ("content-type=multipart/*"))
    @ResponseStatus(value = HttpStatus.OK)
    public void uploadStudent(@RequestParam("file") MultipartFile multipartFile) throws Exception {
        File file = convert(multipartFile);
        for (Map<String, String> map : xlsService.parseExcelToListOfMap(file)) {
            Student student = new Student();
            xlsService.writeMapToObject(map, student);
            studentRepository.save(student);
            ResponseEntity.ok();
        }
    }

    private File convert(MultipartFile file) throws Exception {
        File convFile = new File(file.getOriginalFilename());
        convFile.createNewFile();
        FileOutputStream fos = new FileOutputStream(convFile);
        fos.write(file.getBytes());
        fos.close();
        return convFile;
    }
}
