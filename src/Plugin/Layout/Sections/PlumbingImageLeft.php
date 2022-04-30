<?php

namespace Drupal\just_mod\Plugin\Layout\Sections;

use Drupal\Core\Layout\LayoutDefault;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "plumbing_image_left_section",
 *   label = @Translation("Plumbing image left section"),
 *   category = @Translation("Plumbing Layout"),
 *   path = "layouts/sections",
 *   template = "plumbing_image_left",
 *   library = "just_mod/plumbing_image_left",
 * )
 */
class PlumbingImageLeft extends FormatageModelsSection
{
    /**
     *
     * {@inheritdoc}
     */
    public function defaultConfiguration()
    {
        return parent::defaultConfiguration();
    }
}
