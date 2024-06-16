from django.db import models
from django.utils.translation import gettext_lazy as _

class Job(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    salary_from = models.DecimalField(max_digits=10, decimal_places=2)
    salary_to = models.DecimalField(max_digits=10, decimal_places=2)
    experience = models.IntegerField()
    skills = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    is_deleted = models.BooleanField(default=False)

    class Meta:
        db_table = 'job_job'
        verbose_name = _('job')
        verbose_name_plural = _('jobs')
    
    def __str__(self):
        return str(self.title)


# {
#     "title": "job1", 
#     "description": "job description",
#     "salary_from": 30000,
#     "salary_to": 50000,
#     "experience": 3,
#     "skills": "python, django",
#     "company": "wipro"
# }

