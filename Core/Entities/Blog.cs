namespace Core.Entities
{
    public class Blog : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public DateOnly Date { get; set; }
        public string PictureUrl { get; set; }
        
    }
}